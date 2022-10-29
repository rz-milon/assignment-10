import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import FqA from "../../Pages/FqA/FqA";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";

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
                path:'/courseItems/:id',
                loader: ()=> fetch('http://localhost:5000/course-items'),
                element:<Course></Course>
            },
            {
                path:'course',
                element:<Course></Course>
            },
            {
                path:'/course/:id',
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
                path:'signup',
                element:<Signup></Signup>
            },
            {
                path:'login',
                element:<Login></Login>
            },

        ]
    },
])