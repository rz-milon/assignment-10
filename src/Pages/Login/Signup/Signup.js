import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('');

    const {createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    console.log(createUser);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile()
            handleEmailVerification();
            toast.success('Please verify your email address.')
        })
        .catch( error => console.error(error));
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });
    }

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }


    return (
        <div className="bg-slate-300 min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="fullName"
                            placeholder="Full Name" />

                        <input
                            type="email"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="email"
                            placeholder="Email Address" required />

                        <input
                            type="password"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="password"
                            placeholder="Password" required />
                        <input
                            type="password"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="confirm_password"
                            placeholder="Confirm Password" required />


                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                        >Create Account</button>

                        <form action="">
                            {error}
                        </form>
                    </form>
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