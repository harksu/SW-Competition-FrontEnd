/* eslint-disable no-use-before-define */
import { useQuery } from '@tanstack/react-query';
import { testGetBoardInfo } from '../api/DetailPageAPI';

function useBoard(id) {
  const {
    data: board,
    isLoading: boardLoading,
    isError: boardError,
  } = useQuery(['Board', id], testGetBoardInfo);
  return {
    board,
    boardLoading,
    boardError,
  };
}
export default useBoard;
