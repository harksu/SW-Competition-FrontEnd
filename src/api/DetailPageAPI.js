/* eslint-disable import/prefer-default-export */
/* eslint-disable operator-linebreak  */
/* eslint-disable  */
import { toast } from 'react-toastify';
import instance from '../lib/Request';

export async function testGetBoardInfo({ queryKey }) {
  try {
    return await instance.get(`/api/boards/${queryKey[1]}`);
  } catch (e) {
    console.log(e);
  }
}

export async function likeBoard(boardId) {
  try {
    await instance.post(`/api/boards/${boardId}`);
  } catch (e) {
    console.log(e);
    console.log(boardId);
  }
}

export async function dislikeBoard(boardId) {
  try {
    await instance.post(`/api/boards/${boardId}`);
  } catch (e) {
    console.log(e);
    console.log(boardId);
  }
}

export async function registerReply({ boardId, answerText }) {
  try {
    console.log(answerText);
    await instance.post(`/api/boards/${boardId}/replies`, {
      content: answerText,
    });
  } catch (e) {
    toast(e.result.msg);
  }
}

export async function modifyReply({ boardId, answerText }) {
  try {
    console.log(answerText);
    await instance.put(`/api/boards/${boardId}/replies`, {
      content: answerText,
    });
  } catch (e) {
    toast(e);
  }
}

export async function deleteBoard(boardId) {
  try {
    await instance
      .delete(`/api/boards/${boardId}`)
      .then(toast('게시물이 삭제되었습니다.'));
  } catch (e) {
    console.log(e);
  }
}
