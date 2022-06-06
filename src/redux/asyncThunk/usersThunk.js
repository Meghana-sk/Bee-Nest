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

export { getUsers };
