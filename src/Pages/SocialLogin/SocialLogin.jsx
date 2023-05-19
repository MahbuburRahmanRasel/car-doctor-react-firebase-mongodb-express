import React, { useContext } from "react";
import { useState } from "react";
import "./SocialLogin.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  
} from "firebase/auth";

import app from "../../firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {

  const [user, setUser] = useState(null);
  const {googleProvider} = useContext(AuthContext)
  const auth = getAuth(app);


  //google signin 
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
}




  return (
    <div className=" social-button-container w-50 mt-3 mx-auto">
      <div className="mx-auto">
        <img
          onClick={handleGoogleSignIn}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      
    </div>
  );
};

export default SocialLogin;
