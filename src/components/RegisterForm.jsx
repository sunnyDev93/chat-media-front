import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startSession } from "../storage/session";
import { setAuth } from "../store/auth/slice";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password, phone }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        phone
      );
      const user = userCredential.user;
      const uid = user.uid;
      const userInfo = {
        email: user.email,
        name: user.displayName,
        phN: user.phoneNumber,
        avatar: user.photoURL,
      };
      dispatch(setAuth({ uid, userInfo }));
      startSession(user);
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-sm justify-center w-full border border-white hover:border-gray-800 md:flex md:mx-auto text-white bg-gray-800 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg px-5 py-2.5 text-center"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;