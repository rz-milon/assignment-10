import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, IconName } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="relative min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-2 text-3xl font-bold text-gray-900">
                            Welcom Back!
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
                    </div>
                    
                    <form className="mt-8 space-y-6 text-left" >
                            <div className="relative">
                                <label className="text-sm font-bold text-gray-700 tracking-wide" htmlFor="">Email address</label>
                                <input className=" w-full text-base py-2 px-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" name="email" id="" required/>
                            </div>
                            <div className="mt-8 content-center">
                                <label className="text-sm font-bold text-gray-700 tracking-wide" htmlFor="">Password</label>
                                <input className="w-full content-center text-base py-2 px-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500"  type="password" name="password" id="" required/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
                                        <label for="remember_me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                </div>
                                <div className="text-sm">
                                    <Link to="#" className="font-medium text-indigo-500 hover:text-indigo-500">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center bg-indigo-500 text-gray-100 p-3  rounded tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-700 shadow-lg cursor-pointer transition ease-in duration-300">
                                    Sign in
                                </button>
                            </div>
                            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                <span>Don't have an account?</span>
                                <Link to="/signup" className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</Link>
                            </p>
                    </form>

                    <div className="flex items-center justify-center space-x-2">
                        <span className="h-px w-16 bg-gray-300"></span>
                        <span className="text-gray-500 font-normal">Or continue with</span>
                        <span className="h-px w-16 bg-gray-300"></span>
                    </div>

                    <div className="flex flex-row justify-center items-center space-x-10">
                        <button className='hover:opacity-50  cursor-pointer transition ease-in duration-300'>
                        <FaGoogle className='w-8 h-8'></FaGoogle>
                        </button>
                        <button className='hover:opacity-50  cursor-pointer transition ease-in duration-300'>
                        <FaGithub className='w-8 h-8'></FaGithub>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;