import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-gray-200 w-full p-3 rounded mb-4"
                        name="fullName"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        className="block border border-gray-200 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email Address" required/>

                    <input
                        type="password"
                        className="block border border-gray-200 w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" required/>
                    <input
                        type="password"
                        className="block border border-gray-200 w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" required/>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-gray-500 mt-4">
                        By signing up, you agree to the
                        <Link className="border-b border-gray-600" to="#">
                            Terms of Service 
                        </Link> and
                        <Link className="border-b border-gray-600" to="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div className="text-gray-500 mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue-700 text-blue-700" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    );
};

export default Signup;