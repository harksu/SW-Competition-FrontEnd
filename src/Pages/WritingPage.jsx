import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import WritingDropdownMenu from '../Components/WritingDropdownMenu';
import { WritingAtom } from '../Atoms/WritingAtom';

function WritingPage() {
  const { tag } = useRecoilValue(WritingAtom);
  console.log('tag: ', tag);
  // const setWritingTitleState = useSetRecoilState(WritingAtom);

  return (
    <WritingWrapper>
      <Title>명지 의견 글작성</Title>
      <WritingBox>
        <SubTitleBox>
          <SubTitleText>제목</SubTitleText>
          <SubTitleInput>
            <WritingDropdownMenu />
            <SubTitle> {tag} </SubTitle>
          </SubTitleInput>
        </SubTitleBox>
        <ContentsBox>
          <SubTitleText>내용</SubTitleText>
          <ContentsInput>
            <ContentsText>
              안녕하세요. 자연캠퍼스에 재학 중입니다. 현재 학식이 늦어짐에 따라
              불편을 겪는 학우들이 많은 걸로 알고 있습니다. 언제쯤 확실히 운영을
              하게 될지 제대로 된 날짜를 알려주시면 좋겠습니다. 감사합니다.
            </ContentsText>
          </ContentsInput>
        </ContentsBox>
        <AgreeAndPostBox>
          <p>
            폭력적인 글이나 명예훼손성 발언의 글을 작성하실 경우 학교 측으로
            사용자 정보를 제공하는 것에 동의하십니까?
          </p>
          <CheckButton type="checkbox" />
          <WritingButton>작성하기</WritingButton>
        </AgreeAndPostBox>
      </WritingBox>
      <NoneBox />
    </WritingWrapper>
  );
}

const WritingWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 128px;
`;

const Title = styled.p`
  font-size: 50px;
  margin-top: 128px;
  margin-left: 268px;
  font-weight: bold;
`;

const WritingBox = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

// 제목 박스
const SubTitleBox = styled.div`
  display: flex;
  margin-bottom: 54px;

  margin-top: 28px;
`;

const SubTitleText = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const SubTitleInput = styled.div`
  width: 800px;
  height: 58px;
  margin-left: 52px;

  display: flex;

  background: #ffffff;
  border: 2px solid #ededed;
  border-radius: 10px;
`;

const SubTitle = styled.p`
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
`;

// 내용 박스
const ContentsBox = styled.div`
  display: flex;
`;

const ContentsInput = styled.div`
  width: 800px;
  height: 600px;

  background: #ffffff;
  border: 2px solid #ededed;
  border-radius: 10px;

  margin-left: 52px;
  margin-bottom: 25px;
`;

const ContentsText = styled.p`
  margin: 30px 30px 30px 30px;
`;

const NoneBox = styled.div`
  height: 148px;
`;

// 동의 & 작성버튼
const AgreeAndPostBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 37px;
  margin-left: 100px;
  p {
    font-size: 13px;
  }
`;

const CheckButton = styled.input`
  width: 20px;
  height: 20px;

  margin-left: 18px;
`;

const WritingButton = styled.button`
  width: 130px;
  height: 40px;
  background: #ffffff;

  border: 1px solid #b5b5b5;
  border-radius: 5px;
  margin: 10px 0 10px 38px;
`;

export default WritingPage;
