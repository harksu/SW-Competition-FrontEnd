import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likeBoard } from '../api/DetailPageAPI';

function useLike(boardId) {
  const queryClient = useQueryClient();
  return useMutation(
    (id) => {
      likeBoard(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['Board', boardId]);
      },
    },
  );
}

export default useLike;
