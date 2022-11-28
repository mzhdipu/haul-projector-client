import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Signin from "../../Pages/Authentication/Signin/Signin";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Order from "../../Pages/Dashboard/Order/Order";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Faq from "../../Pages/Faq/Faq";
import FullHdProjectors from "../../Pages/FullHdProjectors/FullHdProjectors";
import Home from "../../Pages/Home/Home";
import LedProjectors from "../../Pages/LedProjectors/LedProjectors";
import NotFound from "../../Pages/NotFound/NotFound";
import WirelessProjectors from "../../Pages/WirelessProjectors/WirelessProjectors";
import AdminRoutes from "../Layout/AdminRoutes";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/add-products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/full-hd-projectors",
        element: <FullHdProjectors></FullHdProjectors>,
      },
      {
        path: "/led-projectors",
        element: <LedProjectors></LedProjectors>,
      },
      {
        path: "/wireless-projectors",
        element: <WirelessProjectors></WirelessProjectors>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      
    ],
  },

  {
    path: '/dashboard',
    element : <AdminRoutes></AdminRoutes>,
    children : [
        {
            path: '/dashboard/allusers',
            element : <Allusers></Allusers>,
            loader: ()=>{
                return fetch(`${process.env.REACT_APP_server}/users`)
            }
        },
        {
            path: '/dashboard/allbuyers',
            element : <AllBuyers></AllBuyers>
        },
        {
            path: '/dashboard/allseller',
            element : <AllSellers></AllSellers>
        },
        {
            path: '/dashboard/order',
            element : <Order></Order>
        },
        {
            path: '/dashboard/payment',
            element : <Payment></Payment>
        },
    ]
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
