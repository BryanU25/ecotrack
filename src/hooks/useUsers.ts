import { useCallback } from "react";
import { fetcher } from "@/utils/httpClient";

import { setError, setIsLoading, setOneUser } from "@/redux/features/userSlice";
import { useDispatch } from "react-redux";

export default function useUsers() {
  const dispatch = useDispatch();

  const getUser = useCallback(
    async (userId: number) => {
      try {
        dispatch(setIsLoading(true));
        dispatch(setOneUser(null));
        const user = await fetcher(`/users/${userId}`);
        dispatch(setOneUser(user));
      } catch (error) {
        dispatch(setError(error));
        console.log(error);
      } finally {
        dispatch(setIsLoading(false));
      }
    },
    [dispatch]
  );

  return {
    getUser,
  };
}
