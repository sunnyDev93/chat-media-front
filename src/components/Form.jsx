import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { handleLogin } from "../store/auth/action";
import { isLoadingStatus } from "../store/auth/selectors";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingStatus);
  // const error = useSelector(getError);
  //   const onSubmit = async ({ email, password }) => {
  //     e.preventDefault();
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         navigate("/");
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, errorMessage);
  //       });
  //   };
  const onSubmit = async ({ email, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        const user = userCredential.user;
        console.log("user", user);
        const userInfo = {
          uid: user.uid,
          email: user.email,
          password: password,
          name: user.displayName,
          phN: user.phoneNumber,
          avatar: user.photoURL,
        };
        dispatch(handleLogin(userInfo));
      }
    } catch (error) {
      toast.error("Invalid Password!");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-5">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#F3F4F6]"
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
            className="block mb-2 text-sm font-medium text-[#F3F4F6]"
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
        {/* <div className="flex items-center mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-900"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-white"
          >
            Remember me
          </label>
        </div> */}
        <button
          type="submit"
          className="shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)] text-sm justify-center w-full hover:border-gray-800 md:flex md:mx-auto text-white bg-[#FFFFFF0D] hover:bg-basic mt-4 font-medium rounded-full px-5 py-2.5 text-center"
        >
          {isLoading ? (
            <img
              src="./assets/img/loading.svg"
              alt="Loading..."
              className="h-10"
            />
          ) : (
            <span>Login</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
