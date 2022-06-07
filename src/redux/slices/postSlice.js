import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getPosts,
  newPost,
  editPost,
  deletePost,
  likedPost,
  dislikedPost,
} from "../asyncThunk";

const initialState = { posts: [], isLoading: false };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action?.error?.message);
    },
    [newPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [newPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action?.payload?.data?.errors[0]);
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action?.payload?.data?.errors[0]);
    },
    [likedPost.pending]: (state) => {
      state.isLoading = true;
    },
    [likedPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [likedPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [dislikedPost.pending]: (state) => {
      state.isLoading = true;
    },
    [dislikedPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [dislikedPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
  },
});

export const { reducer: postsReducer } = postsSlice;
