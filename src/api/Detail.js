/* eslint-disable import/prefer-default-export */
/* eslint-disable operator-linebreak  */
/* eslint-disable  */
import axios from 'axios';

const user = {
  username: 'test',
  password: 'password12345!',
};

export async function TestLogin() {
  try {
    await axios.post('/api/sign-in', user).then((res) => {
      const token = res.data.result.data.accessToken;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('성공');
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getBoardInfo(boardId, setBoard) {
  try {
    await axios(`/api/boards/${boardId}`).then((res) => {
      setBoard(res.data.result.data.boards);
    });
  } catch (e) {
    console.log(e);
  }
}

export async function likeBoard(boardId) {
  try {
    await axios.post(`/api/boards${boardId}`).then((res) => {
      console.log(res, '좋아요');
    });
  } catch (e) {
    console.log(e);
  }
}

export async function dislikeBoard(boardId) {
  try {
    await axios.post(`/api/boards${boardId}`).then((res) => {
      console.log(res, '좋아요 취소');
    });
  } catch (e) {
    console.log(e);
  }
}

export async function councilAnswer(boardId, content) {
  try {
    await axios.post(`/api/boards/${boardId}/replies`, content).then((res) => {
      console.log(res, '성공');
    });
  } catch (e) {
    console.log(e);
  }
}

export async function modifyCouncilAnswer(boardId, content) {
  try {
    await axios(`/api/boards/${boardId}/replies`, content).then((res) => {
      console.log(res, '성공');
    });
  } catch (e) {
    console.log(e);
  }
}
