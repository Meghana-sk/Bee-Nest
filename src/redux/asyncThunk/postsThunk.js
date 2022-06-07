import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPosts = createAsyncThunk("posts/getPosts", async (rejectWithValue) => {
  try {
    const response = await axios.get("/api/posts");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    rejectWithValue({
      data: error.response.data,
      status: error.response.status,
    });
  }
});

const newPost = createAsyncThunk(
  "posts/newPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postData, token }, { rejectWithValue }) => {
    console.log("in edit thunk", postData);
    try {
      const response = await axios.post(
        `/api/posts/edit/${postData._id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      console.log("edit resposme", response);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ post, token }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/${post._id}`, {
        headers: { authorization: token },
      });
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export { getPosts, newPost, editPost, deletePost };
