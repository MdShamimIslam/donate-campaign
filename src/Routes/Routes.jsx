import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Home/Home";
import Donation from "../components/Donation/Donation";
import Statistics from "../components/Statistics/Statistics";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CategoryDetails from "../components/categoryDetails/CategoryDetails";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/category/:id",
                element:<CategoryDetails></CategoryDetails>,
                loader:()=>fetch('../categories.json')
            }

        ]
    }
])

export default router