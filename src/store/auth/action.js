import {
  clearAuth,
  // setAuth,
  // setError,
  signupFailure,
  signupStart,
  signupSuccess,
} from "./slice";
// import jwtEncode from "jwt-encode";

// export const login =
//   ({ email, password, navigate }) =>
//   async (dispatch) => {
//     try {
//       //   const response = await api.post("/login", credentials);
//       const user = users.find(
//         (user) =>
//           (user.email === email || user.username === email) &&
//           user.password === password
//       );
//       console.log(user);
//       if (typeof user === "undefined") throw new Error("Auth failed");
//       const secretKey = "jack"; // Replace with your actual secret key
//       const token = jwtEncode(user, secretKey);
//       // const isAuthenticated = true;
//       dispatch(setAuth({ token, user }));
//       dispatch(setError({ error: undefined }));
//       console.log("success");
//       navigate("/");
//     } catch (error) {
//       console.log("error", error);
//       // dispatch(setError({ error: "auth", message: "failed" }));
//       console.log("error");
//     }
//   };

export const logout =
  ({ navigate }) =>
  async (dispatch) => {
    dispatch(clearAuth());
    navigate("/");
  };
export const signupUser = (userData) => async (dispatch) => {
  dispatch(signupStart());

  try {
    // Make an API request to sign up the user
    // const response = await fetch("/api/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });

    // if (!response.ok) {
    //   throw new Error("Signup failed");
    // }

    // const user = await response.json();
    dispatch(signupSuccess(userData));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};
