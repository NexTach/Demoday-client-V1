import Navigation from "../components/Navigation";
import styled from "styled-components";
import { useState } from "react";

const SettingWrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
`;

const SettingSection = styled.section`
  font-size: 13px;
  margin: 12px 24px;
  color: #a1a1a1;
`;

const SettingMenu = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin: 12px 24px;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      font-size: 13px;
      color: #625d5b;
    }
  }
`;

const FontSizeSelect = styled.select`
  margin-left: 10px;
  width: 50px;
`;

const ThemeSelect = styled.select`
  margin-left: 10px;
`;

const Setting = () => {
  const [fontSize, setFontSize] = useState<number>(100);
  const [theme, setTheme] = useState<string>("white");

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(Number(e.target.value));
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <SettingWrapper>
        <SettingSection>개인 설정</SettingSection>
        <SettingMenu>
          글꼴 크기 설정
          <div>
            <p>현재 글꼴 크기</p>
            <FontSizeSelect value={fontSize} onChange={handleFontSizeChange}>
              <option value="50">50%</option>
              <option value="75">75%</option>
              <option value="100">100%</option>
              <option value="125">125%</option>
              <option value="150">150%</option>
              <option value="175">175%</option>
              <option value="200">200%</option>
            </FontSizeSelect>
          </div>
        </SettingMenu>
        <SettingMenu>
          워치 연결 상태
          <div>
            <p>연결 안됨</p>
          </div>
        </SettingMenu>
        <SettingMenu style={{ marginBottom: "32px" }}>
          테마
          <div>
            <p>현재 테마</p>
            <ThemeSelect value={theme} onChange={handleThemeChange}>
              <option value="white">화이트</option>
              <option value="black">블랙</option>
            </ThemeSelect>
          </div>
        </SettingMenu>
        <SettingSection>계정 보안</SettingSection>
        <SettingMenu>비밀번호 변경</SettingMenu>
        <SettingMenu style={{ color: "red" }}>로그아웃</SettingMenu>
      </SettingWrapper>
      <Navigation />
    </>
  );
};

export default Setting;
