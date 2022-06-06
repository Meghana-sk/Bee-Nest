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

export { getPosts, newPost };
