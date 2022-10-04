import { useMutation, useQueryClient } from '@tanstack/react-query';
import { modifyReply, registerReply } from '../api/DetailPageAPI';

export function useRegisterReply(id) {
  const queryClient = useQueryClient();
  return useMutation(
    ({ boardId, answerText }) => {
      registerReply({ boardId, answerText });
    },
    {
      onSuccess: () => {
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
        queryClient.invalidateQueries(['Board', id]);
      },
    },
  );
}
