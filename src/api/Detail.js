/* eslint-disable import/prefer-default-export */
/* eslint-disable operator-linebreak  */
/* eslint-disable  */
import axios from 'axios';
import { toast } from 'react-toastify';

const user = {
  username: 'test',
  password: 'password12345!',
};

export async function getBoardInfo(
  boardId,
  setBoard,
  setIsLoading,
  setIsAnswered,
  setLikeCount,
  setIsLike,
  setIsMine,
  setIsCouncil,
) {
  try {
    await axios.post('/api/sign-in', user).then((res) => {
      const token = res.data.result.data.accessToken;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('성공');
    });
  } catch (e) {
    console.log(e);
  }
  try {
    await axios(`/api/boards/${boardId}`).then((res) => {
      const boardData = res.data.result.data;
      setBoard(() => boardData);
      if (boardData.reply) setIsAnswered(true);
      if (boardData.isPermittedToReplyOrEdit) setIsCouncil(true);
      if (boardData.isAlreadyPushedLikeByUser) setIsLike(true);
      if (boardData.isMineBoard) setIsMine(true);
      setLikeCount(boardData.boards.likesCount);

      setIsLoading(false);
    });
  } catch (e) {
    console.log(e);
  }
}

export async function likeBoard(boardId, setIsLike) {
  try {
    await axios.post(`/api/boards/${boardId}`).then((res) => {
      setIsLike((prev) => !prev);
      console.log(res, '좋아요');
    });
  } catch (e) {
    console.log(e);
  }
}

export async function dislikeBoard(boardId, setIsLike) {
  try {
    await axios.post(`/api/boards/${boardId}`).then((res) => {
      setIsLike((prev) => !prev);
      console.log(res, '좋아요 취소');
    });
  } catch (e) {
    console.log(e);
  }
}

export async function registerReply(boardId, answerText, setIsAnsewred) {
  try {
    await axios
      .post(`/api/boards/${boardId}/replies`, {
        content: answerText,
      })
      .then((res) => {
        setIsAnsewred(true);
        toast('답변이 등록되었습니다.');
      });
  } catch (e) {
    toast(e.result.msg);
  }
}

export async function modifyReply(boardId, answerText, setIsAnsewred) {
  try {
    await axios
      .get(`/api/boards/${boardId}/replies`, {
        content: answerText,
      })
      .then((res) => {
        setIsAnsewred(true);
        toast('답변이 등록되었습니다.');
      });
  } catch (e) {
    toast(e.result.msg);
  }
}
