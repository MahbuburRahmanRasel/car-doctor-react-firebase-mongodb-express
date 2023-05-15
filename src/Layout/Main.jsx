import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer";
import Navbar from "../Pages/SharedPages/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
      
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
