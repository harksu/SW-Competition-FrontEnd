import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { modifyReply, registerReply } from '../api/DetailPageAPI';

export function useRegisterReply(id) {
  const queryClient = useQueryClient();
  return useMutation(
    ({ boardId, answerText }) => {
      registerReply({ boardId, answerText });
    },
    {
      onSuccess: () => {
        toast('답변이 등록되었습니다.');
        queryClient.invalidateQueries(['Board', id]);
      },
    },
  );
}

export function useModifyReply(id) {
  const queryClient = useQueryClient();
  return useMutation(
    ({ boardId, answerText }) => {
      modifyReply({ boardId, answerText });
    },
    {
      onSuccess: () => {
        toast('답변이 수정되었습니다.');
        queryClient.invalidateQueries(['Board', id]);
      },
    },
  );
}
