import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <NavLink
          to="/"
          className="inline-flex items-center"
        >
          <i className="fa-solid fa-feather text-fuchsia-500"></i>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase hover:text-blue-500">
            Al Farabi Academy
          </span>
        </NavLink>
        <ul className="flex items-center hidden space-x-1 lg:flex">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                  : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
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
                  ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                  : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
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
                  ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                  : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
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
                  ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                  : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
              }
            >
              FQA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                  : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
              }
            >
              About us
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center hidden space-x-2 lg:flex">
          <li>
            <NavLink
              to="/signup"
              className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide text-gray-700 transition duration-200 rounded hover:text-amber-400 "
            >
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide text-gray-700 transition duration-200 rounded hover:text-amber-400 "
            >
              Login
            </NavLink>
          </li>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox" className="toggle toggle-secondary" checked />
              </label>
            </div>
          </li>
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
                      to="/"
                      className="inline-flex items-center"
                    >
                      <i className="fa-solid fa-feather text-fuchsia-500"></i>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
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
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        className={({ isActive }) =>
                          isActive
                            ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                            : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
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
                            ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                            : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
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
                            ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                            : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
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
                            ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                            : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
                        }
                      >
                        FQA
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/aboutUs"
                        className={({ isActive }) =>
                          isActive
                            ? 'font-medium tracking-wide text-blue-700 border-b-4 border-green-600 transition-colors duration-200 px-6 py-3 rounded'
                            : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-gray-100 px-6 py-3 rounded'
                        }
                      >
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/signup"
                        className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide text-gray-700 transition duration-200 rounded hover:text-amber-400 "
                      >
                        Sign up
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide text-gray-700 transition duration-200 rounded hover:text-amber-400 "
                      >
                        Login
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
  );
};

export default Header;





