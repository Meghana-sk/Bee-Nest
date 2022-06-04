import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../asyncThunk";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.isLoading = false;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.data.createdUser;
      state.token = action.payload.data.encodedToken;
    },
    [signup.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { logout } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
