import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "@firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal, RegisterForm } from "../../components";
import { auth, db } from "../../firebase";
import { startSession } from "../../storage/session";
import { setAuth } from "../../store/auth/slice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register: phoneRegister, handleSubmit: phoneHandleSubmit } =
    useForm();
  const { register: OTPRegister, handleSubmit: OTPHandleSubmit } = useForm();
  const [showVerification, setShowVerification] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    console.log("signin with google");
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      console.log("ok");
      toast.success("Sign-in with Google successful!");
      navigate("/");
      console.log(user);
      const userInfo = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        phN: user.phoneNumber,
        avatar: user.photoURL,
      };
      dispatch(setAuth({ userInfo }));
      startSession(user);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
        size: "invisible",
        callback: (response) => {},
      });
    }
  }

  function onSignUp(values) {
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, values?.phoneNumber, appVerifier)
      .then((confirmationResult) => {
        toast.success("Successfully sent the Verification code");
        window.confirmationResult = confirmationResult;
        setShowVerification(true);
        console.log(window?.confirmationResult);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onOTPVerify(values) {
    window?.confirmationResult
      .confirm(values.code)
      .then((res) => {
        toast.success("User signed in successfully.");
        const userInfo = {
          uid: res.user.uid,
          phN: res.user.phoneNumber,
        };
        dispatch(setAuth({ userInfo }));
        startSession(userInfo);
        navigate("/");
        console.log(res);
      })
      .catch(() => {
        // setLoading(false);
        toast.error("Invalid Code.");
      });
  }
  return (
    <div>
      <section className="max-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="h-16 mr-2"
              src="./assets/img/white.webp"
              alt="logo"
            />
          </Link>
          <div className="ml-60">
            <Link to="/login" className="text-gray-400 font-bold">
              Click to HERE to login.
            </Link>
          </div>
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white text-center">
                Create your account
              </h1>
              <RegisterForm />
              <div>
                <fieldset className="border-t border-solid border-gray-600">
                  <legend className="mx-auto px-2 text-center text-sm text-white font-bold">
                    Or Login via our secure system
                  </legend>
                </fieldset>
              </div>
              <div className="px-8 w-full">
                <button
                  type="button"
                  onClick={signInWithGoogle}
                  className="w-full justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign Up with Google
                </button>
              </div>
              <div className="px-8 w-full">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className={` w-full justify-center text-black hover:text-white bg-white hover:bg-gray-800 border hover:border-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`}
                >
                  <i className="fas fa-phone mr-2"></i>
                  Login with Phone
                </button>
              </div>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <div className="relative bg-black rounded-lg shadow">
                  <div id="sign-in-button"></div>
                  {!showVerification ? (
                    <div className="form-wrapper  px-8">
                      <button
                        type="button"
                        onClick={() => setModalOpen(false)}
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                      <form
                        id="loginForm"
                        onSubmit={phoneHandleSubmit(onSignUp)}
                        className="px-6 py-6 "
                      >
                        <div className="my-5 w-full">
                          <label
                            htmlFor="confirmPwd"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Phone Number
                          </label>
                          <input
                            id="phoneNumber"
                            {...phoneRegister("phoneNumber")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5" /* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500*/
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="mb-5 text-sm justify-center w-full border border-white hover:border-gray-300 md:flex md:mx-auto text-white bg-transparent rounded-lg px-5 py-2.5 text-center"
                        >
                          Verify Phone
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="form-wrapper p-5">
                      <form
                        id="otpForm"
                        onSubmit={OTPHandleSubmit(onOTPVerify)}
                      >
                        <div className="mb-6">
                          <label
                            htmlFor="code"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Verification Code
                          </label>
                          <input
                            id="code"
                            {...OTPRegister("code")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5" /* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500*/
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="text-sm justify-center w-full border border-white hover:border-gray-800 md:flex md:mx-auto text-white bg-gray-800 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg px-5 py-2.5 text-center"
                          onClick={onOTPVerify}
                        >
                          Verify OTP
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
