import React from "react";
import { auth } from "../service/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      localStorage.setItem(
        "user",
        JSON.stringify(result.user)
      );

      alert("Login Successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={loginWithGoogle}>
      Login with Google
    </button>
  );
}

export default Login;