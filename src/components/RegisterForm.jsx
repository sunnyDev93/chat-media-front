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
            type="email"
            className="bg-[#FFFFFF0D] border border-[#4E4E52] text-[#4E4E52] text-sm rounded-full focus:ring-[#FFFFFF2D] focus:border focus:border-[#4E4E52] block w-full p-2.5"
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
            className="bg-[#FFFFFF0D] border-[#4E4E52] text-[#4E4E52] text-sm rounded-full focus:ring-[#4E4E52] focus:border-[#4E4E52] block w-full p-2.5"
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
            } bg-[#FFFFFF0D] border-[#4E4E52] text-[#4E4E52] text-sm rounded-full focus:ring-[#4E4E52] focus:border-[#4E4E52] block w-full p-2.5`}
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
          className="shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)] text-sm justify-center w-full hover:border-gray-800 md:flex md:mx-auto text-white bg-[#FFFFFF0D] hover:bg-basic mt-8 font-medium rounded-full px-5 py-2.5 text-center"
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
