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
import DashboardLayout from "../Layout/DashboardLayout";
import Cart from "../Dashboard/cart/Cart";
import AllUsers from "../DashboardPages/allUser/AllUsers";


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
    {
        path: 'dashboard',
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // admin routes
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);
export default mycreatedrouter