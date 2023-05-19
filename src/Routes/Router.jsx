import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Login/Signup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/CheckOut/Bookings";
import PrivateRoute from "./PrivateRoute";



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
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><CheckOut /></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings /></PrivateRoute> 

        }
      ]
    },
  ]);






  export default router