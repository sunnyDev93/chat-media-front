import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Modal } from "../../components";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { handleLogin } from "../../store/auth/action";
const Login = () => {
  const { register: phoneRegister, handleSubmit: phoneHandleSubmit } =
    useForm();
  const { register: OTPRegister, handleSubmit: OTPHandleSubmit } = useForm();
  const [showVerification, setShowVerification] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

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
      console.log("ok", user);
      // toast.success("Sign-in with Google successful!");
      // navigate("/");
      console.log(user);
      const userInfo = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        phN: user.phoneNumber,
        // avatar: user.photoURL,
      };
      // dispatch(setAuth({ userInfo }));
      // startSession(user);
      dispatch(handleLogin(userInfo));
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
        size: "invisible",
        callback: (response) => {},
      });
    }
  };

  const onSignUp = (values) => {
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, values?.phoneNumber, appVerifier)
      .then((confirmationResult) => {
        toast.success("Successfully sent the Verification code");
        window.confirmationResult = confirmationResult;
        setShowVerification(true);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onOTPVerify = (values) => {
    console.log(values);
    if (values.code) {
      window?.confirmationResult
        .confirm(values?.code)
        .then((result) => {
          // toast.success("User signed in successfully.");
          // navigate("/");
          // window.location.href = "/";
          // const result = window?.confirmationResult?.confirm(values.code);
          // User signed in successfully.
          const user = result.user;

          if (user) {
            const userInfo = {
              uid: user.uid,
              phN: user.phoneNumber,
            };
            console.log(userInfo);
            dispatch(handleLogin(userInfo));
          }
        })
        .catch(() => {
          // setLoading(false);
        });
    }
  };

  return (
    <div>
      <section>
        <div className="grid grid-cols-2 justify-between py-8 mx-auto lg:py-0 mt-32">
          <div className="absolute top-0 z-0 right-0 w-1/2">
            <img src="./assets/img/design/rbg2.png" className="" alt="img" />
          </div>
          <div className="col-span-1 relative justify-center flex">
            <div className="absolute top-2/4 left-0  w-1/2 h-full z-0">
              <img src="./assets/img/design/lbg1.png" alt="img" />
            </div>
            <div>
              <img src="./assets/img/design/auth.png" alt="img" />
            </div>
          </div>
          <div className="col-span-1 relative flex justify-center">
            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#FFFFFF0D]">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                  Login
                </h1>
                <Form />
                <div className="flex justify-center">
                  <Link to="/register" className="text-[#F3F4F6] text-sm z-40">
                    Don’t have an account?{" "}
                    <span className="text-[#89CF1C]">Register</span>
                  </Link>
                </div>
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
                    className="z-40 w-full justify-center text-white bg-basic hover:font-bold focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
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
                    Login with Google
                  </button>
                </div>
                <div className="px-8 w-full">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className={`z-40 w-full justify-center text-black hover:text-white bg-white hover:bg-[#FFFFFF0D] hover:border-white font-medium rounded-full text-sm px-5 py-2.5 text-center items-center mr-2 mb-2`}
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
                              htmlFor="phoneNumber"
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
        </div>
      </section>
    </div>
  );
};

export default Login;
