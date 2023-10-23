import {
  clearAuth,
  // setAuth,
  // setError,
  signupFailure,
  signupStart,
  signupSuccess,
} from "./slice.js";

export const logout =
  ({ navigate }) =>
  async (dispatch) => {
    dispatch(clearAuth());
    navigate("/");
  };
export const signupUser = (userData) => async (dispatch) => {
  dispatch(signupStart());

  try {
    dispatch(signupSuccess(userData));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};
