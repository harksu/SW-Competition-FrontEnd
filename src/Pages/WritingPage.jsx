import styled from 'styled-components';

function WritingPage() {
  return (
    <WritingWrapper>
      <Title>명지 의견 글작성</Title>
      <WritingBox>
        <SubTitleBox>
          <SubTitleText>제목</SubTitleText>
          <SubTitleInput>ddddddd</SubTitleInput>
        </SubTitleBox>
        <ContentsBox>
          <SubTitleText>내용</SubTitleText>
          <ContentsInput>d</ContentsInput>
        </ContentsBox>
      </WritingBox>
    </WritingWrapper>
  );
}

const WritingWrapper = styled.div`
  margin-top: 128px;
`;

const Title = styled.p`
  font-size: 50px;
  margin-top: 128px;
`;

const WritingBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 128px;
  margin-bottom: 148px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

// 제목 박스
const SubTitleBox = styled.div`
  display: flex;
  margin-bottom: 54px;
`;

const SubTitleText = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

// 내용 박스
const ContentsBox = styled.div`
  display: flex;
`;

const SubTitleInput = styled.div`
  width: 1000px;
  height: 58px;
  background-color: yellow;
  margin-left: 52px;
`;

const ContentsInput = styled.div`
  width: 1000px;
  height: 600px;
  background-color: yellow;
  margin-left: 52px;
`;

export default WritingPage;
