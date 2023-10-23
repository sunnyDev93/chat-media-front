import { toast } from "react-toastify";
import {
  fetchPricesFailure,
  fetchPricesStart,
  fetchPricesSuccess,
} from "../store/priceMng/slice";

export const updatePlan = (prices) => async (dispatch) => {
  dispatch(fetchPricesStart());
  const body = {
    prices: prices,
  };
  const headers = {
    // Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch("http://localhost:8000/api/price/update", {
      method: "Post",
      headers: headers,
      body: JSON.stringify(body),
    });
    const resData = await response.json();
    if (resData) {
      console.log("res", resData);
      const prices = resData?.newPrices;
      dispatch(fetchPricesSuccess(prices));
      toast.success("Update Success.");
      setTimeout(() => {
        window.location.href = "/price";
      }, 2000);
    }
  } catch (error) {
    toast.error(error);
    dispatch(fetchPricesFailure(error));
  }
};

export const fetchAllPrices = () => async (dispatch) => {
  dispatch(fetchPricesStart());
  const headers = {
    // Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch("http://localhost:8000/api/price/all", {
      method: "GET",
      headers: headers,
    });
    const resData = await response.json();
    if (resData) {
      console.log(resData);
      const prices = resData?.prices;
      dispatch(fetchPricesSuccess(prices));
    }
  } catch (error) {
    dispatch(fetchPricesFailure(error));
  }
};
