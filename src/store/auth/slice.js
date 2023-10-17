/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { NAME } from "./constants";

const initialState = {};

const authSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    startAuth: (state) => {
      state.isLoading = true;
    },
    setAuth: (state, { payload }) => {
      state.token = payload.token;
      state.error = null;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    stateReset: () => initialState,
    signupStart: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    signupFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    fetchUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },
    fetchUserFailure: (state, payload) => {
      state.error = payload;
      state.isLoading = false;
    },
    updateToken: (state, token) => {
      state.user.token = token;
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
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} = authSlice.actions;

export default authSlice;
