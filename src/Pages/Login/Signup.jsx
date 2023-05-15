import React from "react";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";

const Signup = () => {

const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.ta


}






  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
            <h1 className="text-center font-bold text-4xl my-5">SignUp</h1>
            <div className="card-body">
              <form onSubmit={handleLogin}>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
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
              <p>Have an account <Link to="/login" className="text-primary font-bold">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
