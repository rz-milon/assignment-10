
import React, { useContext, useState } from 'react';
import { FaEnvira, FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }


  const changeTheme = ()=>{
    console.log('click');
  }
  return (
    <div className=''>
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 absolute left-0 right-0 top-0">
        <div className="relative flex items-center justify-between">
          <NavLink
            to="/"
            className="inline-flex items-center"
          >
            <FaEnvira className='text-4xl text-green-800 mr-3'></FaEnvira>
            <span className="ml-2 text-xl font-bold tracking-wide text-indigo-800 uppercase hover:text-blue-700">
              Al Farabi Academy
            </span>
          </NavLink>
          <ul className="flex items-center hidden space-x-1 lg:flex ">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                    : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                    : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                }
              >
                Course
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                    : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fqa"
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                    : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                }
              >
                FAQ
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center space-x-2 hidden lg:flex">
            {
              user?.uid ?
                <div className='py-[8px]'>
                  <span>{user?.displayName}</span>
                  <button className='bg-black text-white font-medium px-3 py-1 rounded-md hover:bg-red-600 mr-3' onClick={handleLogOut}>Log out</button>
                </div>
                :
                <>
                  <li>
                    <NavLink
                      to="/signup"
                      className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide  text-gray-700 transition duration-200 rounded hover:text-amber-400 "
                    >
                      Sign up
                    </NavLink>

                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide  text-gray-700 transition duration-200 rounded hover:text-amber-400 "
                    >
                      Log in
                    </NavLink>
                  </li>
                </>
            }

            
            <div onClick={changeTheme} className='flex'>
                <FaSun></FaSun> 
                <FaMoon></FaMoon>
            </div>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-200 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/home"
                        className="inline-flex items-center"
                      >
                        <i className="fa-solid fa-feather text-fuchsia-500"></i>
                        <span className="ml-2 text-xl font-bold tracking-wide  text-gray-700 uppercase">
                          Al Farabi Academy
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 ">
                      <li>
                        <NavLink
                          to="/home"
                          className={({ isActive }) =>
                            isActive
                              ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                              : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/course"
                          className={({ isActive }) =>
                            isActive
                              ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                              : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                          }
                        >
                          Course
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            isActive
                              ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                              : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/fqa"
                          className={({ isActive }) =>
                            isActive
                              ? 'font-medium tracking-wide text-blue-900 border-b-4 border-indigo-800 transition-colors duration-200 px-6 py-3 rounded'
                              : 'font-medium tracking-wide  text-gray-700 transition-colors duration-200 hover:text-gray-900 px-6 py-3 rounded'
                          }
                        >
                          FAQ
                        </NavLink>
                      </li>

                      <li className='space-y-0'>
                        <NavLink
                          to="/signup"
                          className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide  text-gray-700 transition duration-200 rounded hover:text-amber-400 "
                        >
                          Sign up
                        </NavLink>
                      </li>
                      <li className='space-y-0'>
                        <NavLink
                          to="/login"
                          className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide  text-gray-700 transition duration-200 rounded hover:text-amber-400 "
                        >
                          Log in
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


