import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../asyncThunk";

const initialState = { posts: [], bookmarks: [], isLoading: false };

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
  },
});

export const { reducer: postsReducer } = postsSlice;
