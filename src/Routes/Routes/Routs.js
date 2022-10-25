import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import FqA from "../../Pages/FqA/FqA";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'course',
                element:<Course></Course>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'fqa',
                element:<FqA></FqA>
            }
        ]
    },
])