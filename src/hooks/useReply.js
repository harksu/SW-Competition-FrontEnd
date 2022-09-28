import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { modifyReply, registerReply } from '../api/DetailPageAPI';

export function useRegisterReply(boardId) {
  const queryClient = useQueryClient();
  return useMutation(
    (id, text) => {
      registerReply(id, text);
    },
    {
      onSuccess: () => {
        toast('답변이 등록되었습니다.');
        queryClient.invalidateQueries(['Board', boardId]);
      },
    },
  );
}

export function useModifyReply(boardId) {
  const queryClient = useQueryClient();
  return useMutation(
    (id, text) => {
      modifyReply(id, text);
    },
    {
      onSuccess: () => {
        toast('답변이 수정되었습니다.');
        queryClient.invalidateQueries(['Board', boardId]);
      },
    },
  );
}
