/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGetTranscript: false,
  error: null,
  transcript: [],
  isSelected: 0,
  isLoading: false,
};

const chatMediaSlice = createSlice({
  name: "chatMedia",
  initialState,
  reducers: {
    setTranscript: (state, { payload }) => {
      state.transcript = [payload, ...state.transcript];
      state.isGetTranscript = true;
    },
    setSelect: (state, { payload }) => {
      state.isSelected = payload.isSelected;
    },
    clearTranscript: (state) => {
      state.transcript = [];
      state.isGetTranscript = false;
      state.isSelected = 0;
    },
    setChat: (state) => {
      // state.chat = payload;
      state.isGetChat = true;
    },
    clearChat: (state) => {
      // state.chat = {};
      state.isGetChat = false;
    },

    // setError: (state, { payload }) => {
    //   state.error = payload;
    // },
    stateReset: () => initialState,
    transProcessing: (state) => {
      state.isLoading = true;
    },
    transSuccess: (state) => {
      state.isLoading = false;
    },
    // signupSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    //   state.error = null;
    // },
    // signupFailure: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});
export const {
  setChat,
  clearChat,
  setTranscript,
  clearTranscript,
  setSelect,
  transProcessing,
  transSuccess,
} = chatMediaSlice.actions;

export default chatMediaSlice;
