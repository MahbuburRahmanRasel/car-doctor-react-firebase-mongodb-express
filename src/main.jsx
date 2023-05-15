import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <React.StrictMode>
      <AuthProvider >
      <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
