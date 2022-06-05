import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer } from "../slices";

export const store = configureStore({
  reducer: { auth: authReducer, posts: postsReducer },
});
