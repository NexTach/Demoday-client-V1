import axios, { AxiosResponse } from "axios";
import pLimit from "p-limit";

const API_URL: string = "https://port-0-demoday-server-v1-lzsaeexf05f2c47e.sel4.cloudtype.app/api/v1/auth";
const limit = pLimit(5);

interface IRequest {
  signup(name: string, email: string, password: string): Promise<boolean>;
  signin(email: string, password: string): Promise<boolean>;
  signout(token: string): Promise<boolean>;
}

class AuthRequest implements IRequest {
  private static instance: AuthRequest;

  private constructor() {}

  public static getInstance(): AuthRequest {
    if (!AuthRequest.instance) {
      AuthRequest.instance = new AuthRequest();
    }
    return AuthRequest.instance;
  }

  public async signup(name: string, email: string, password: string): Promise<boolean> {
    return limit(() => AuthRequestHandler.makeRequest("signup", name, email, password));
  }

  public async signin(email: string, password: string): Promise<boolean> {
    return limit(() => AuthRequestHandler.makeRequest("signin", "", email, password));
  }

  public async signout(token: string): Promise<boolean> {
    return limit(() => AuthRequestHandler.makeRequest("signout", "", "", "", token));
  }
}

class AuthRequestHandler {
  public static async makeRequest(
    type: string,
    name: string,
    email: string,
    password: string,
    token: string = ""
  ): Promise<boolean> {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response: AxiosResponse = await axios.post(`${API_URL}/${type}`, { name, email, password }, { headers });
      return response.status === 200;
    } catch (error) {
      AuthErrorHandler.handleError(error);
      return false;
    }
  }
}

class AuthErrorHandler {
  public static handleError(error: any): void {
    if (error instanceof Error) {
      throw error;
    } else {
      throw AuthErrorCreator.createError(String(error));
    }
  }
}

class AuthErrorCreator {
  public static createError(message: string): Error {
    return new Error(`${message}`);
  }
}

export { AuthRequest, AuthErrorHandler, AuthErrorCreator };
