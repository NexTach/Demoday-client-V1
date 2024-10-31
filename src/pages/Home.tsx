import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import styled from "styled-components";
import RecentPlaceCard from "../components/RecentPlaceCard";

const ContentWrapper = styled.div<{ padding?: string }>`
  width: 100%;
  display: flex;
  padding: ${(props) => props.padding || "52px 173px 0px 24px"};
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`;

const StyledSVG = styled.svg`
  position: absolute;
  right: 5.25rem;
  bottom: 1.375rem;
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

const KeyWord = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--main, #2ea1e9);
  color: white;
  padding: 8.5px 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.08px;
`;

const SavingPlace = styled.div`
  width: 100%;
  display: flex;
  height: 3.25rem;
  padding: 17px 24px;
  align-items: center;
  border-radius: 8px;
  background: var(--white, #fafafa);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
`;

const AddButton = styled.button`
  width: 100%;
  display: flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--white, #fafafa);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
`;

const RecordWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5.8125rem;
  padding: 15px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: var(--white, #fafafa);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
`;

const RecordContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 11px;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 19.6875rem;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 3px;
  background: var(--g-4, #e9e8e7);
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
        <StyledSVG
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="60" height="60" fill="url(#pattern0_161_743)" />
          <defs>
            <pattern
              id="pattern0_161_743"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_161_743" transform="scale(0.00454545)" />
            </pattern>
            <image
              id="image0_161_743"
              width="220"
              height="220"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </StyledSVG>
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
      <ContentWrapper padding="32px 253px 0px 24px">
        <Text>내가 자주쓰는 키워드</Text>
      </ContentWrapper>
      <ContentWrapper
        padding="12px 174px 0px 24px;"
        style={{ flexDirection: "row" }}
      >
        <KeyWord>엘리베이터</KeyWord>
        <KeyWord>경사로</KeyWord>
        <KeyWord>큰길</KeyWord>
      </ContentWrapper>
      <ContentWrapper padding="32px 313px 0px 24px">
        <Text>저장한 장소</Text>
      </ContentWrapper>
      <ContentWrapper padding="12px 24px 0px 24px" style={{ gap: "8px" }}>
        <SavingPlace>
          <Text fontSize="14px">우리집</Text>
        </SavingPlace>
        <SavingPlace>
          <Text fontSize="14px">회사</Text>
        </SavingPlace>
        <AddButton>
          <Text fontSize="13px" style={{ color: "#625D5B" }}>
            더 추가하기
          </Text>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7857 12.7143H13.2143V16.2857C13.2143 16.6786 12.8929 17 12.5 17C12.1071 17 11.7857 16.6786 11.7857 16.2857V12.7143H8.21429C7.82143 12.7143 7.5 12.3929 7.5 12C7.5 11.6071 7.82143 11.2857 8.21429 11.2857H11.7857V7.71429C11.7857 7.32143 12.1071 7 12.5 7C12.8929 7 13.2143 7.32143 13.2143 7.71429V11.2857H16.7857C17.1786 11.2857 17.5 11.6071 17.5 12C17.5 12.3929 17.1786 12.7143 16.7857 12.7143Z"
              fill="#625D5B"
            />
          </svg>
        </AddButton>
      </ContentWrapper>
      <ContentWrapper padding="32px 327px 0px 24px">
        <Text>나의 기록</Text>
      </ContentWrapper>
      <ContentWrapper padding="12px 24px 55px 24px">
        <RecordWrapper>
          <RecordContainer>
            <TextWrapper>
              <Text>이번주 이동거리</Text>
              <Text>13.4km</Text>
            </TextWrapper>
            <Line />
            <TextWrapper>
              <Text>이번주 활동량</Text>
              <Text>62분</Text>
            </TextWrapper>
          </RecordContainer>
        </RecordWrapper>
      </ContentWrapper>
      <Navigation />
    </Wrapper>
  );
};

export default Home;
