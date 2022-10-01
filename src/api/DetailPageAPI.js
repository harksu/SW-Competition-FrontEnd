/* eslint-disable import/prefer-default-export */
/* eslint-disable operator-linebreak  */
/* eslint-disable  */
import axios from 'axios';
import { toast } from 'react-toastify';

const user = {
  username: 'test2',
  password: 'password12345!',
};

export async function testGetBoardInfo({ queryKey }) {
  try {
    await axios.post('/api/sign-in', user).then((res) => {
      const token = res.data.result.data.accessToken;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('로그인 성공');
    });
  } catch (e) {
    return console.log(e);
  }
  try {
    return await axios.get(`/api/boards/${queryKey[1]}`);
  } catch (e) {
    console.log(e);
  }
}

export async function likeBoard(boardId) {
  try {
    await axios.post(`/api/boards/${boardId}`);
  } catch (e) {
    console.log(e);
    console.log(boardId);
  }
}

export async function dislikeBoard(boardId) {
  try {
    await axios.post(`/api/boards/${boardId}`);
  } catch (e) {
    console.log(e);
    console.log(boardId);
  }
}

export async function registerReply(boardId, answerText) {
  try {
    await axios.post(`/api/boards/${boardId}/replies`, {
      content: answerText,
    });
  } catch (e) {
    toast(e.result.msg);
  }
}

export async function modifyReply(boardId, answerText) {
  try {
    console.log(answerText);
    await axios.put(`/api/boards/${boardId}/replies`, {
      content: answerText,
    });
  } catch (e) {
    toast(e);
  }
}
