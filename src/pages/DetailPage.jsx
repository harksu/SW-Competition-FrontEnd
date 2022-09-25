/* eslint-disable no-unused-expressions */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../assests/backArrow.svg';
import { ReactComponent as Heart } from '../assests/Heart.svg';
import { ReactComponent as AnsweredIcon } from '../assests/Answered.svg';

function DetailPage() {
  const [isYongin] = useState(true);
  /* 자연캠 인캠 텍스트 달기 위한 state */
  const [isAnswered, setIsAnswered] = useState(false);
  /* 답변이 작성되었는지 알기 위한 state */
  const [isSelf] = useState(true);
  /* 작성자 본인인지 알기 위한 state */
  const [isCouncil] = useState(false);
  /* 학생회인지 알기 위한 state */
  const [answerWriting, setAnswerWriting] = useState(false);
  /* 답변이 작성중인지 알기 위한 state */
  const [answerText, setAnswerText] = useState('');
  /* 답변 입력값 state */

  function handleAnswer(e) {
    setAnswerText(e.target.value);
  }
  function handleAnswerBtn() {
    if (answerWriting) {
      /* post answerText */
      setAnswerText('');
      setIsAnswered(true);
      setAnswerWriting(false);
    } else {
      setAnswerWriting(true);
    }
  }

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
        <QuestionBox>
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?"
        </QuestionBox>
        <QuestionButtonSpace>
          {isSelf && !isCouncil && <QuestionButton>수정하기</QuestionButton>}
        </QuestionButtonSpace>
        <AnswerText Answered={isAnswered}>
          <AnswerContainer>
            답변
            {isAnswered && <AnsweredIconStyled />}
          </AnswerContainer>
        </AnswerText>
        {answerWriting ? (
          <AnswereTextArea onChange={handleAnswer} />
        ) : (
          <AnswerBox Answered={isAnswered}>
            {isAnswered ? (
              <AnswerComp>안녕하세요</AnswerComp>
            ) : (
              <WaitAnswer>
                <div>의견이 전달되었습니다.</div>
                <div>답변을 조금만 기다려주세요.</div>
              </WaitAnswer>
            )}
          </AnswerBox>
        )}

        <AnswerButtonSpace>
          {isCouncil && (
            <AnswerButton onClick={handleAnswerBtn} value={answerText}>
              {answerWriting
                ? '저장하기'
                : isAnswered
                ? '답변 수정하기'
                : '답변 작성하기'}
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
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #ededed;
  }
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
const AnswereTextArea = styled.textarea`
  grid-column: 2/3;
  grid-row: -3/-2;
  border: 2px solid #ededed;
  padding: 20px 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #ededed;
  }
`;

const AnswerBox = styled.div`
  grid-column: 2/3;
  grid-row: -3/-2;
  border: 2px solid #ededed;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #ededed;
  }
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
