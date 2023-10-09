/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { NAME } from "./constants";

const initialState = {};

const authSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    startAuth: (state) => {
      state.isLoading= true;
    },
    setAuth: (state, {payload}) => {
      state.token = payload.token;
      state.error = null;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    stateReset: () => initialState,
    signupStart: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    signupFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const {
  startAuth,
  setAuth,
  clearAuth,
  setError,
  signupStart,
  signupSuccess,
  signupFailure,
} = authSlice.actions;

export default authSlice;
