import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

const {loginUser}= useContext(AuthContext);
const location = useLocation()
const navigate = useNavigate()
const from = location.state?.from?.pathname || '/';


const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email,password)
    .then(result =>{
      const user = result.user;
      
      navigate(from, { replace: true });
      

    })
    .catch(error =>{
      console.log(error);
    })
    


}






  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
            <h1 className="text-center font-bold text-4xl my-5">Login</h1>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-orange"
                  />
                </div>
              </form>
              <p>New to Car Doctors <Link to="/signup" className="text-primary font-bold">Sign Up</Link></p>
            <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
