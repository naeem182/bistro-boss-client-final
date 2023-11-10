import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";


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
        ],
    },
]);
export default mycreatedrouter