import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "../components";
import { endSession, isLoggedIn } from "../storage/session";
import { logout } from "../store/auth/action";
import { useDispatch } from "react-redux";

const Header = () => {
  const menuItems = [
    { link: "/", title: "Home" },
    { link: "/plan", title: "Plan" },
    { link: "/faq", title: "FAQ" },
    { link: "/about", title: "About Us" },
  ];

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const isLoginRoute = location.pathname.includes("login");
  const isRegisterRoute = location.pathname.includes("register");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout({ navigate }));
    endSession();
  };
  const headerClasses = `fixed w-full z-10 top-0 flex items-center justify-center mx-auto py-5 px-5 sm:px-64 ${
    scrolling ? "bg-black" : "bg-transparent"
  } transition-all duration-300 ease-in-out`;
  if (isLoginRoute || isRegisterRoute) return null;

  return (
    <header className="">
      <div className={headerClasses}>
        <Link to="/" className="flex items-center">
          {scrolling ? (
            <img
              src="./assets/img/logo192.png"
              className="h-12 sm:h-16 mr-8"
              alt="Logo"
            />
          ) : (
            <img
              src="./assets/img/white.webp"
              className="h-12 sm:h-16 mr-8"
              alt="Logo"
            />
          )}

          {/* <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                ChatMedia
              </span> */}
        </Link>
        <div className="flex items-center lg:order-2 ml-auto">
          {isLoggedIn() ? (
            <button
              onClick={handleLogout}
              className={`flex items-center sm:text-white font-medium rounded-lg bg-[#36D45A] px-2 sm:px-5 py-2 lg:py-2.5 mr-2`}
            >
              <span className="sm:block hidden">Logout</span>

              <svg
                className="h-5 sm:hidden block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16 16.9998L21 11.9998M21 11.9998L16 6.99982M21 11.9998H9M12 16.9998C12 17.2954 12 17.4432 11.989 17.5712C11.8748 18.9018 10.8949 19.9967 9.58503 20.2571C9.45903 20.2821 9.31202 20.2985 9.01835 20.3311L7.99694 20.4446C6.46248 20.6151 5.69521 20.7003 5.08566 20.5053C4.27293 20.2452 3.60942 19.6513 3.26118 18.8723C3 18.288 3 17.5161 3 15.9721V8.02751C3 6.48358 3 5.71162 3.26118 5.12734C3.60942 4.3483 4.27293 3.75442 5.08566 3.49435C5.69521 3.29929 6.46246 3.38454 7.99694 3.55503L9.01835 3.66852C9.31212 3.70117 9.45901 3.71749 9.58503 3.74254C10.8949 4.00297 11.8748 5.09786 11.989 6.42843C12 6.55645 12 6.70424 12 6.99982"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:border hover:border-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white bg-[#36D45A] hover:bg-transparent hover:border hover:border-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Register
              </Link>
            </>
          )}

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 text-sm sm:text-lg font-semibold lg:flex-row lg:space-x-4 lg:mt-0">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
