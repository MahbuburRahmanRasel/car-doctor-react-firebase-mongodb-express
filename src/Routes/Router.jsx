import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Login/Signup";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: '/signup',
          element: <Signup />,
        }
      ]
    },
  ]);






  export default router