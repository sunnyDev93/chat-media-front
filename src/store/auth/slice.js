/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { NAME } from "./constants";

const initialState = {
  uid: null,
  user: {},
  error: null,
};

const authSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.uid = payload.uid;
      state.user = payload.user;
      state.error = null;
    },
    clearAuth: (state) => {
      state.uid = null;
      state.user = {};
      state.token = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    stateReset: () => initialState,
    signupStart: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  setAuth,
  clearAuth,
  setError,
  signupStart,
  signupSuccess,
  signupFailure,
} = authSlice.actions;

export default authSlice;
