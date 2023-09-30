import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-WM8yLJMSuuHvC4T3kXFJMYmKYrJ1Jos",
  authDomain: "chat-media-1ded3.firebaseapp.com",
  projectId: "chat-media-1ded3",
  storageBucket: "chat-media-1ded3.appspot.com",
  messagingSenderId: "798716684918",
  appId: "1:798716684918:web:ef914b67a8b0a5e98c8d57",
  measurementId: "G-Z8CG40J6FN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const DB = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
