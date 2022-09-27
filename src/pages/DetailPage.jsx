/* eslint-disable no-unused-expressions */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingPage from './LoadingPage';
import { ReactComponent as Arrow } from '../assests/backArrow.svg';
import { ReactComponent as Heart } from '../assests/Heart.svg';
import { ReactComponent as AnsweredIcon } from '../assests/Answered.svg';
import { ReactComponent as FullHeart } from '../assests/FullHeart.svg';
import {
  getBoardInfo,
  likeBoard,
  dislikeBoard,
  registerReply,
  modifyReply,
} from '../api/Detail';

function DetailPage() {
  const [isAnswered, setIsAnswered] = useState(false);
  /* 답변이 작성되었는지 알기 위한 state */

  const [answerWriting, setAnswerWriting] = useState(false);
  /* 답변이 작성중인지 알기 위한 state */

  const [answerText, setAnswerText] = useState('');
  /* 답변 입력값 state */

  const [isLike, setIsLike] = useState(false);
  /* 좋아요가 눌렸는지 알기 위한 state */

  const [isLoading, setIsLoading] = useState(true);
  /* 로딩중인지 알기 위한 state */

  const [boardInfo, setBoardInfo] = useState();
  /* 게시판 정보를 저장하는 state */

  const [isMine, setIsMine] = useState(false);
  /* 작성자인지 알기 위한 state */

  const [isCouncil, setIsCouncil] = useState(false);
  /* 학생회인지 알기 위한 state */

  const [likeCount, setLikeCount] = useState();
  /* 좋아요 개수 state */

  useEffect(() => {
    getBoardInfo(
      1,
      setBoardInfo,
      setIsLoading,
      setIsAnswered,
      setLikeCount,
      setIsLike,
      setIsMine,
      setIsCouncil,
    );
  }, []);

  /* 좋아요 개수를 서버 state로 관리해야해서 react-query 공부 후에 리팩토링 */
  function decreaseLike() {
    dislikeBoard(1, setIsLike);
    setLikeCount((prev) => prev - 1);
  }
  function increaseLike() {
    likeBoard(1, setIsLike);
    setLikeCount((prev) => prev + 1);
  }

  /* 학생회 답변 textarea handleChange 함수 */
  function handleAnswer(e) {
    setAnswerText(e.target.value);
  }

  /* 학생회 답변하기 버튼 handleClick 함수 */
  function handleAnswerBtn() {
    if (answerWriting) {
      if (!isAnswered) registerReply(1, answerText, setIsAnswered);
      else modifyReply(1, answerText, setIsAnswered);
      setIsAnswered(true);
      setAnswerWriting(false);
    } else {
      /* 학생회인지 아닌지 판단 */
      setAnswerWriting(true);
    }
  }

  /* 수정하기 버튼 handleClick 함수 */
  function handleQuestionBtn() {
    console.log('글 작성 페이지로 이동');
  }

  return (
    <Container>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Container>
          <BacktoList>
            <ArrowStyled />
            <BackText>목록으로 돌아가기</BackText>
          </BacktoList>
          <BoardContainer>
            {boardInfo && (
              <Title>
                [{boardInfo.boards.tag}]{boardInfo.boards.title}
              </Title>
            )}
            <BoardInfo>
              <UserDate>
                {boardInfo && <User>{boardInfo.boards.writerName}</User>}
                {boardInfo && (
                  <Date>
                    {boardInfo.boards.createdAt[0]}.
                    {boardInfo.boards.createdAt[1]}.
                    {boardInfo.boards.createdAt[2]}
                  </Date>
                )}
              </UserDate>
              <Recommand>
                {isLike ? (
                  <FullHeartStyled onClick={decreaseLike} />
                ) : (
                  <HeartStyled onClick={increaseLike} />
                )}
                {boardInfo && <RecommandCount>{likeCount}</RecommandCount>}
              </Recommand>
            </BoardInfo>
            <QuestionText>내용</QuestionText>
            {boardInfo && <QuestionBox>{boardInfo.boards.content}</QuestionBox>}
            <QuestionButtonSpace>
              {isMine && (
                <QuestionButton onClick={handleQuestionBtn}>
                  수정하기
                </QuestionButton>
              )}
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
                  <AnswerComp>{boardInfo.reply.content}</AnswerComp>
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
      )}
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

const FullHeartStyled = styled(FullHeart)`
  height: 50%;
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
