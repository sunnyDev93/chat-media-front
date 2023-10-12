import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithPhoneNumber,
} from "firebase/auth";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-WM8yLJMSuuHvC4T3kXFJMYmKYrJ1Jos",
  authDomain: "chat-media-1ded3.firebaseapp.com",
  databaseURL:
    "https://chat-media-1ded3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-media-1ded3",
  storageBucket: "chat-media-1ded3.appspot.com",
  messagingSenderId: "798716684918",
  appId: "1:798716684918:web:ef914b67a8b0a5e98c8d57",
  measurementId: "G-Z8CG40J6FN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPhoneVerificationCode = async (phoneNumber, appVerifier) => {
  try {
    const confirmation = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    // You can store the confirmation object to use later for code verification
    return confirmation;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const verifyPhoneCode = async (confirmation, code) => {
  try {
    await confirmation.confirm(code); // Use the `confirm` method of the confirmation object
    console.log("Phone number verification successful");
    return true; // You can return a success flag or perform additional actions
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false; // Handle verification failure
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  sendPhoneVerificationCode,
  verifyPhoneCode,
  firebaseConfig,
};
