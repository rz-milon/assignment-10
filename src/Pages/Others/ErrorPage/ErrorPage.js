import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import errorImg from './../../../assets/error-page.gif'



const ErrorPage = () => {
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
            <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
                <img
                    className="object-cover w-full h-80 md:h-64 lg:h-auto"
                    src={errorImg}
                    alt=""
                />

            </div>
            <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                <div className="">
                <Link
                        to="/home"
                        className="border inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-800 transition duration-200  rounded bg-deep-purple-accent-400 hover:bg-amber-200"
                    >
                        <FaChevronLeft className='flex justify-start mr-4'></FaChevronLeft>
                     Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;