import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { RootLayout } from "../layout/RootLayout";
import { About } from "../pages/About";
import { Review } from "../pages/review";
import { AddReviews } from "../pages/AddReviews";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { AdminLayout } from "../layout/AdminLayout";
import { Movie } from "../pages/admin/Movie";



export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
        children:[
            {
                path:'',
                element:  <Home/>
            },
            {
                path:'about',
                element: <About/>
            },
            {
                path:'signup',
                element: <Signup />
            },
            {
                path:'review',
                element:<Review />
            },
            {
                path:'login',
                element:<Login />
            },
            {
                path:'AddReviews',
                element:<AddReviews/>
            },
        ],
    },
    {
        path:"admin",
        element:<AdminLayout/>,
        children:[
            {
                path:'movie',
                element:<Movie />
            },
        ]
    }
]);
