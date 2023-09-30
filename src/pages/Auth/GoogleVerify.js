import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase";
import { startSession } from "../../storage/session";
import { setAuth } from "../../store/auth/slice";
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async ({ dispatch, navigate }) => {
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
    const uid = user.uid;
    const userInfo = {
      email: user.email,
      name: user.displayName,
      phN: user.phoneNumber,
      avatar: user.photoURL,
    };
    dispatch(setAuth({ uid, userInfo }));
    startSession(user);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
