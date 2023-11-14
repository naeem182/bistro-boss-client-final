import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import Order from "../Pages/OurShopOrder/Order";
import Login from "../Pages/LoginLogout/Login";
import Signup from "../Pages/LoginLogout/Signup";
import Secret from "../Pages/Secret/Secret";
import PrivateRouter from "./PrivateRouter";


const mycreatedrouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "ourmenu",
                element: <Menu></Menu>,
            },

            {
                path: "order/:category",
                element: <Order></Order>,

            },
            {
                path: "secret",
                element: <PrivateRouter><Secret></Secret></PrivateRouter>,

            },

        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    },
]);
export default mycreatedrouter