import { useOutletContext, useNavigate } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import InputField from "../components/InputField";
import SignupController from "../features/auth/SignupController";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.button<{ disabled?: boolean }>`
  display: flex;
  width: 22.75rem;
  height: 3.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ disabled }) => (disabled ? "#e9e8e7" : "#2EA1E9")};
  color: ${({ disabled }) => (disabled ? "#625d5b" : "#FAFAFA")};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  font-family: SUIT;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const SignupPassword: React.FC = () => {
  const { password, setPassword, confirmPassword, setConfirmPassword, error, setError, name, email } =
    useOutletContext<{
      password: string;
      setPassword: React.Dispatch<React.SetStateAction<string>>;
      confirmPassword: string;
      setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
      error: string;
      setError: React.Dispatch<React.SetStateAction<string>>;
      name: string;
      email: string;
    }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!password || !confirmPassword) {
      setError("Please enter both password and confirm password");
      return;
    }
    if (password !== confirmPassword) {
      setError("password mismatch");
      return;
    }
    setIsSubmitting(true);
    try {
      const success = await SignupController.signup(name, email, password);
      if (success) {
        navigate("/home");
      } else {
        setError("signup failed");
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = password !== confirmPassword || !password || !confirmPassword || isSubmitting;

  return (
    <Wrapper>
      <h2>비밀번호 입력</h2>
      <InputField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요"
      />
      <InputField
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="비밀번호를 확인하세요"
      />
      {error && <p className="error">{error}</p>}
      <Button onClick={handleSignup} disabled={isDisabled}>
        회원가입
      </Button>
    </Wrapper>
  );
};

export default SignupPassword;
