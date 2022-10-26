import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import FqA from "../../Pages/FqA/FqA";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'/courseItems/:id',
                element:<Course></Course>
            },
            {
                path:'course',
                element:<Course></Course>
            },
            {
                path:'/courseItems/:id',
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'fqa',
                element:<FqA></FqA>
            },
            {
                path:'aboutUs',
                element:<AboutUs></AboutUs>
            }

        ]
    },
])