import { useMutation, useQueryClient } from '@tanstack/react-query';
import { dislikeBoard } from '../api/DetailPageAPI';

function useDisLike(boardId) {
  const queryClient = useQueryClient();
  return useMutation(
    (id) => {
      dislikeBoard(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['Board', boardId]);
      },
    },
  );
}

export default useDisLike;
