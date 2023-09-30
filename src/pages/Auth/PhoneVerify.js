import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "@firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

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
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verifu otp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          let user = result.user;
          console.log(user);
          alert("User signed in successfully");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };

  if (!hasFilled) {
    return (
      <div className="app__container">
        <div>
          <div>
            <p>Enter your phone number</p>
            <form onSubmit={handleSend}>
              <input
                variant="outlined"
                autoComplete="off"
                label="Phone Number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <button type="submit">Send Code</button>
            </form>
          </div>
        </div>
        <div id="recaptcha"></div>
      </div>
    );
  } else {
    return (
      <div className="app__container">
        <div>
          <div>
            <label>Enter the OTP</label>
            <input value={otp} onChange={verifyOtp} />
          </div>
        </div>
        <div id="recaptcha"></div>
      </div>
    );
  }
};

export default Login;
