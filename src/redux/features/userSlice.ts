import { createSlice } from "@reduxjs/toolkit";
import { initialPaginatedState, UserState } from "@/types/initialState";
import { User } from "@/types/User";

const initialState: UserState = {
  users: initialPaginatedState,
  oneUser: null as User | null,
  error: "",
  isLoading: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    setOneUser: (state, action) => {
      state.oneUser = action.payload;
    },

    addUsers: (state, action) => {
      state.users.items.push(action.payload);
    },

    updateUser: (state, action) => {
      const index = state.users.items.findIndex(
        (user) => user.id === action.payload.id
      );

      if (index !== -1) {
        state.users.items[index] = action.payload;
      }
    },

    removeUser: (state, action) => {
      state.users.items = state.users.items.filter(
        (user) => user.id !== action.payload
      );
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setIsCreating: (state, action) => {
      state.isCreating = action.payload;
    },

    setIsUpdating: (state, action) => {
      state.isUpdating = action.payload;
    },

    setIsDeleting: (state, action) => {
      state.isDeleting = action.payload;
    },
  },
});

export const {
  setUsers,
  addUsers,
  updateUser,
  removeUser,
  setError,
  setIsLoading,
  setIsCreating,
  setIsUpdating,
  setIsDeleting,
  setOneUser,
} = userSlice.actions;

export default userSlice.reducer;
