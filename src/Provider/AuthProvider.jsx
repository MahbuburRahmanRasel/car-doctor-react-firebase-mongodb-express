import React, { useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { useEffect } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //registation
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    return signOut(auth);
  };

  //google signup
  const googleProvider = new GoogleAuthProvider();

  //github signup
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    registerUser,
    user,
    logOut,
    loginUser,
    googleProvider,
    githubProvider,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;