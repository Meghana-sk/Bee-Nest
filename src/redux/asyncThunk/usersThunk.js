import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getUsers = createAsyncThunk("users/allUsers", async (rejectWithValue) => {
  try {
    const response = await axios.get("/api/users");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    return rejectWithValue({
      data: error.response.data,
      status: error.response.status,
    });
  }
});

const getBookmarksForAuthUser = createAsyncThunk(
  "user/bookmarks",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users/bookmark", {
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

const followUser = createAsyncThunk(
  "users/follow",
  async ({ userId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        { headers: { authorization: token } }
      );
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

const unfollowUser = createAsyncThunk(
  "users/unfollow",
  async ({ userId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        { headers: { authorization: token } }
      );
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

export { getUsers, getBookmarksForAuthUser, followUser, unfollowUser };
