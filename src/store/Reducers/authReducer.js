/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt from "jwt-decode";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("access_token", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
  reducers: {
    messageClear: (state, _) => {
      state.errorsMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state, _) => {
      // handle pending action
      state.loader = true;
    });
    // end first
    builder.addCase(admin_login.rejected, (state, action) => {
      // handle pending action
      state.loader = false;
      state.errorsMessage = action.payload.error;
    });
    // end of rejected
    builder.addCase(admin_login.fulfilled, (state, action) => {
      // handle pending action
      state.loader = false;
      state.successMessage = action.payload.message;
    });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
