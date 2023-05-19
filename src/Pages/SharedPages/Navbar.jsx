import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navitems = (
    <>
      <div className="space-x-5">
        <Link to="/"> Home </Link>
        <Link to="#about"> About </Link>

        <Link to="/signup"> SignUp </Link>
        {user?.email ? (
          <>
            <Link to="/bookings"> Bookings </Link>
            <Link onClick={handleLogOut}> Logout </Link>
          </>
        ) : (
          <Link to="/login"> Login </Link>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 h-28  py-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navitems}
            </ul>
          </div>
          <Link className="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="">{navitems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn  btn-outline btn-orange">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
