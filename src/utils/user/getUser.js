import {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
} from "../../store/auth/slice";

const getUser = (token) => async (dispatch) => {
  dispatch(fetchUserStart());

  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch("http://localhost:8000/api/auth/me", {
      method: "GET",
      headers: headers,
    });
    const resData = await response.json();
    if (resData) {
      const user = resData?.user;
      dispatch(fetchUserSuccess(user));
    }
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};

export default getUser;
