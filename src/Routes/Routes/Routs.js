import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CourseTopics from "../../Pages/CourseTopics/CourseTopics";
import FqA from "../../Pages/FqA/FqA";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";
import Profile from "../../Pages/Others/Profile/Profile";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'home',
                element:<Home></Home>
            },
           {
              path:'courseTopics',
              element:<CourseTopics></CourseTopics>
           },

            {
               path:'course',
               element:<Course></Course> 
            },
           {
              path:'courseDetails',
              element:<PrivetRoutes><CourseDetails></CourseDetails></PrivetRoutes>
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
                path:'signup',
                element:<Signup></Signup>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            }

        ]
    },
])