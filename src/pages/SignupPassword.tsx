import { useOutletContext } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import InputField from "../components/InputField";
import styled from "styled-components";

const SignupPassword: React.FC = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSignup,
    error,
  } = useOutletContext<{
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    confirmPassword: string;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSignup: () => Promise<void>;
    error: string;
  }>();

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

  const isDisabled =
    password !== confirmPassword || !password || !confirmPassword;

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