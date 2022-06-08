import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUsers, followUser, unfollowUser } from "../asyncThunk";

const initialState = {
  users: [],
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action?.payload?.data?.errors[0]);
    },
    [followUser.pending]: (state) => {
      state.isLoading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [followUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action?.payload?.data?.errors);
    },
    [unfollowUser.pending]: (state) => {
      state.isLoading = true;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action?.payload?.data?.errors[0]);
    },
  },
});

export const { reducer: usersReducer } = usersSlice;
