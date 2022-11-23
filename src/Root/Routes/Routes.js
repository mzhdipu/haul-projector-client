import { createBrowserRouter } from "react-router-dom";
import Faq from "../../Pages/Faq/Faq";
import FullHdProjectors from "../../Pages/FullHdProjectors/FullHdProjectors";
import Home from "../../Pages/Home/Home";
import LedProjectors from "../../Pages/LedProjectors/LedProjectors";
import NotFound from "../../Pages/NotFound/NotFound";
import WirelessProjectors from "../../Pages/WirelessProjectors/WirelessProjectors";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path: "/",
                element : <Home></Home>
            },
            {
                path: "/home",
                element : <Home></Home>
            },
            {
                path: "/faq",
                element : <Faq></Faq>
            },
            {
                path: "/full-hd-projectors",
                element : <FullHdProjectors></FullHdProjectors>
            },
            {
                path: "/led-projectors",
                element : <LedProjectors></LedProjectors>
            },
            {
                path: "/wireless-projectors",
                element : <WirelessProjectors></WirelessProjectors>
            },
        ]
    },
    {
        path : '*',
        element: <NotFound></NotFound>
    }
])