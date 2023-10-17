import { toast } from "react-toastify";
import { startSession } from "../../storage/session";
import {
  clearAuth,
  setAuth,
  // setError,
  signupFailure,
  signupStart,
  signupSuccess,
  startAuth,
} from "./slice";
// import jwtEncode from "jwt-encode";

export const handleLogin = (userInfo) => async (dispatch) => {
  // try {
  //     const response = await fetch("http://localhost:8000/api/auth/login", userInfo);
  //     const token = response.accessToken;
  //   // const isAuthenticated = true;
  //   dispatch(setAuth(token));
  //   startSession(token);
  //   // navigate("/");
  //   window.location.href = "/";
  //   toast.success("Welcome to ChatMedia!");
  // } catch (error) {
  //   console.log("error", error);
  //   // dispatch(setError({ error: "auth", message: "failed" }));
  //   console.log("error");
  // }
  try {
    dispatch(startAuth());
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      toast.error("Login Failed!");
    }

    const data = await response.json();
    console.log("access", data.accessToken);
    const token = data.accessToken;
    if (token) {
      startSession(token);
      window.location.href = "/";
    }
    dispatch(setAuth({ token }));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};

export const logout =
  ({ navigate }) =>
  async (dispatch) => {
    dispatch(clearAuth());
    navigate("/login");
  };
export const modalLogout = () => async (dispatch) => {
  dispatch(clearAuth());
};
export const handleRegister =
  (userData, { navigate }) =>
  async (dispatch) => {
    console.log(userData);
    dispatch(signupStart());
    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      console.log(data.user);
      const user = data.user;
      if (user) {
        // startSession(user);
        toast.success("Successfully registered.");
        dispatch(signupSuccess());
        navigate("/login");
      } else {
        toast.error("Register failure!");
      }
    } catch (error) {
      dispatch(signupFailure(error.message));
    }
  };
