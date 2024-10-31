import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import styled from "styled-components";
import RecentPlaceCard from "../components/RecentPlaceCard";

const ContentWrapper = styled.div<{ padding?: string }>`
  display: flex;
  padding: ${(props) => props.padding || "52px 173px 0px 24px"};
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Text = styled.span<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || "16px"};
  color: "#1b1b1b";
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

const PointColor = styled.span`
  color: #2ea1e9;
`;

const Home = () => {
  const { email, setEmail } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else if (!email) {
      navigate("/signin");
    }
  }, [email, setEmail, navigate]);

  return (
    <Wrapper>
      <ContentWrapper>
        <div>
          <Text fontSize="16px">안녕하세요! </Text>
          <Text fontSize="18px">
            <PointColor>민솔</PointColor>님!
          </Text>
        </div>
        <Text fontSize="20px">오늘의 날씨는 맑음 이에요!</Text>
      </ContentWrapper>
      <ContentWrapper padding="32px 253px 0px 24px">
        <Text>민솔님의 최근 방문지</Text>
      </ContentWrapper>
      <ContentWrapper padding="12px 24px 0px 24px">
        <RecentPlaceCard
          Name="유유샤브 광주 첨단점"
          SubName="샤브샤브"
          Address="광주 광산구 첨단중앙로152번길 81-15"
          ImgUrl="https://ifh.cc/g/qA9qoM.jpg"
          linkUrl="https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&ssc=tab.nx.all&query=%EC%9C%A0%EC%9C%A0%EC%83%A4%EB%B8%8C+%EA%B4%91%EC%A3%BC%EC%B2%A8%EB%8B%A8%EC%A0%90&oquery=%EC%9C%A0%EC%9C%A0%EC%83%A4%EB%B8%8C+%EA%B5%B0%EC%9E%90%EC%97%AD%EC%A0%90&tqi=iya2dwqo1LwssfM2Q%2BGsssssthl-495517&acq=%EC%9C%A0%EC%9C%A0%EC%83%A4%EB%B8%8C+%EA%B4%91%EC%A3%BC&acr=1&qdt=0"
        />
      </ContentWrapper>
      <Navigation />
    </Wrapper>
  );
};

export default Home;
