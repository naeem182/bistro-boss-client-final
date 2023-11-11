import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";


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
        ],
    },
]);
export default mycreatedrouter