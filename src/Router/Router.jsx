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
import AddItems from "../DashboardPages/AddItem/AddItems";
import AdminRoute from "./AdminROuter";
import AdminRouter from "./AdminROuter";
import ManageItems from "../DashboardPages/ManageItems/ManageItems";
import UpdateItem from "../Dashboard/cart/UpdateItem/UpdateItem";
import Payment from "../Pages/payment/Payment";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import UserHome from "../Dashboard/UserHome/UserHome";


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
                path: 'userHome',
                element: <UserHome></UserHome>
            },

            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // admin routes
            {
                path: 'adminHome',
                element: <AdminRouter><AdminHome></AdminHome> </AdminRouter>
            },
            {
                path: 'users',
                element: <AdminRouter> <AllUsers></AllUsers></AdminRouter>
            },
            {
                path: 'addItems',
                element: <AdminRouter><AddItems></AddItems></AdminRouter>
            },
            {
                path: 'manageItems',
                element: <AdminRouter><ManageItems></ManageItems></AdminRouter>
            },
            {
                path: 'updateItem/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
                element: <AdminRouter><UpdateItem></UpdateItem> </AdminRouter>,
            },
        ]
    }
]);
export default mycreatedrouter