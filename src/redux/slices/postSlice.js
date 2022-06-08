import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getPosts,
  newPost,
  editPost,
  deletePost,
  likedPost,
  dislikedPost,
  addComment,
  editComment,
  deleteComment,
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
    [addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },

    [addComment.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editComment.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.posts = action.payload.data.posts;
    },
    [deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
  },
});

export const { reducer: postsReducer } = postsSlice;
