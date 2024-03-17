/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt from "jwt-decode";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log(info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {}
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorsMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // your extra reducers here, using builder callback
  },
});

export default authReducer.reducer;
