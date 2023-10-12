import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../store/auth/action";
import { isLoadingStatus } from "../store/auth/selectors";
import { signupStart } from "../store/auth/slice";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const isLoading = useSelector(isLoadingStatus);

  const onSubmit = async ({ email, password, phone, confirmPwd }) => {
    if (password !== confirmPwd) {
      setError(true);
    } else {
      dispatch(signupStart());
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
          phone
        );
        const user = userCredential.user;
        const userInfo = {
          uid: user.uid,
          email: user.email,
          password: password,
          name: user.displayName,
          phN: user.phoneNumber,
          avatar: user.photoURL,
        };
        dispatch(handleRegister(userInfo, { navigate }));
        // dispatch(setAuth({ userInfo }));
        // startSession(user);
        // navigate("/");
      } catch (error) {
        const errorMessage = error.message;
        alert(errorMessage);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-5">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5" /* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500*/
            placeholder="name@policyWeb.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPwd"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPwd"
            {...register("confirmPwd")}
            className={`${
              error && "border-2 border-red-500"
            } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5`}
            required
          />
          {error && (
            <p
              id="filled_error_help"
              className="mt-2 text-xs text-red-600 dark:text-red-400"
            >
              <span className="font-medium">Password doesn't match.</span>
            </p>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center text-sm justify-center w-full border border-white hover:border-gray-800 md:flex md:mx-auto text-white bg-gray-800 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg px-5 py-2.5 text-center"
        >
          {isLoading ? (
            <img
              src="./assets/img/loading.svg"
              className="h-10"
              alt="loading"
            />
          ) : (
            <span> Register</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
