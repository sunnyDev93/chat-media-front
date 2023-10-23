/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prices: null,
  isLoading: false,
  error: null,
};

const priceMngSlice = createSlice({
  name: "priceMng",
  initialState,
  reducers: {
    fetchPricesSuccess: (state, { payload }) => {
      state.prices = payload;
      state.isLoading = false;
    },
    fetchPricesStart: (state) => {
      state.isLoading = true;
    },
    fetchPricesFailure: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const { fetchPricesSuccess, fetchPricesStart, fetchPricesFailure } =
  priceMngSlice.actions;

export default priceMngSlice;
