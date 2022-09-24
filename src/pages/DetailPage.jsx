/* eslint-disable no-unused-expressions */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../assests/backArrow.svg';
import { ReactComponent as Heart } from '../assests/Heart.svg';
import { ReactComponent as AnsweredIcon } from '../assests/Answered.svg';

function DetailPage() {
  const [isYongin] = useState(true);
  const [isAnswered] = useState(false);
  const [isSelf] = useState(false);
  const [isCouncil] = useState(true);

  return (
    <Container>
      <BacktoList>
        <ArrowStyled />
        <BackText>목록으로 돌아가기</BackText>
      </BacktoList>
      <BoardContainer>
        <Title>
          [{isYongin ? '자연캠' : '인문캠'}]학교 학식 정확히 언제 나오나요?
        </Title>
        <BoardInfo>
          <UserDate>
            <User>작성자: 최**</User>
            <Date>2022.07.21</Date>
          </UserDate>
          <Recommand>
            <HeartStyled />
            <RecommandCount>500</RecommandCount>
          </Recommand>
        </BoardInfo>
        <QuestionText>내용</QuestionText>
        <QuestionBox>질문</QuestionBox>
        <QuestionButtonSpace>
          {isSelf && !isCouncil && <QuestionButton>수정하기</QuestionButton>}
        </QuestionButtonSpace>
        <AnswerText Answered={isAnswered}>
          <AnswerContainer>
            답변
            {isAnswered && <AnsweredIconStyled />}
          </AnswerContainer>
        </AnswerText>
        <AnswerBox Answered={isAnswered}>
          {isAnswered ? (
            <AnswerComp>안녕하세요. 자연캠퍼스 총학생회 ALT입니다.</AnswerComp>
          ) : (
            <WaitAnswer>
              <div>의견이 전달되었습니다.</div>
              <div>답변을 조금만 기다려주세요.</div>
            </WaitAnswer>
          )}
        </AnswerBox>
        <AnswerButtonSpace>
          {isCouncil && (
            <AnswerButton>
              {isAnswered ? '답변 수정하기' : '답변 작성하기'}
            </AnswerButton>
          )}
        </AnswerButtonSpace>
      </BoardContainer>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
const BacktoList = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  align-items: center;
`;
const BackText = styled.div`
  font-size: 10px;
`;
const ArrowStyled = styled(Arrow)`
  height: 50%;
`;
const BoardContainer = styled.div`
  justify-self: center;
  width: 85%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 12fr 8fr 42fr 8fr 30fr 8fr;
`;
const Title = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  border-bottom: 2px solid #efefef;
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 700;
`;

const BoardInfo = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  width: 100%;
`;
const UserDate = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;
`;
const User = styled.div``;
const Date = styled.div``;
const Recommand = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 8%;
  font-size: 18px;
  height: 100%;
`;
const RecommandCount = styled.p`
  align-self: center;
  color: #424242;
  font-weight: 300;
`;
const HeartStyled = styled(Heart)`
  height: 50%;
`;

const QuestionText = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  text-align: end;
  padding-right: 20px;
  font-weight: 600;
`;
const QuestionBox = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  border: 2px solid #ededed;
  padding: 20px 20px;
  overflow-y: scroll;
`;

const QuestionButtonSpace = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const QuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b5b5b5;
  font-weight: 400;
  font-size: 15px;
  width: 15%;
  height: 46%;
  background-color: white;
  border-radius: 5px;
`;
const AnswerText = styled.div`
  grid-column: 1/2;
  grid-row: -3/-2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: ${(props) => !props.Answered && '20px'};
  font-weight: 600;
`;
const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AnsweredIconStyled = styled(AnsweredIcon)`
  height: 28px;
`;

const AnswerBox = styled.div`
  grid-column: 2/3;
  grid-row: -3/-2;
  border: 2px solid #ededed;

  ${(props) =>
    props.Answered
      ? `  
      padding: 20px 20px;
      font-size: 10px;
  `
      : `
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`;

const AnswerComp = styled.p``;

const WaitAnswer = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
`;

const AnswerButtonSpace = styled.div`
  grid-row: -2/-1;
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AnswerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b5b5b5;
  font-weight: 400;
  font-size: 15px;
  width: 15%;
  height: 46%;
  background-color: white;
  border-radius: 5px;
`;
