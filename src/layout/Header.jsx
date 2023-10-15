import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "../components";
import { endSession } from "../storage/session";
import { logout } from "../store/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatus, getToken, selectUser } from "../store/auth/selectors";
import getUser from "../utils/user/getUser";

const Header = ({ isModalOpen, setModalOpen }) => {
  const menuItems = [
    { link: "/", title: "Home" },
    { link: "/plan", title: "Plan" },
    { link: "/faq", title: "FAQ" },
    { link: "/about", title: "About Us" },
  ];
  const [scrolling, setScrolling] = useState(false);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Adjust the scroll threshold as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    if (token) {
      dispatch(getUser(token));
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, token]);

  const location = useLocation();
  const isLoginRoute = location.pathname.includes("login");
  const isRegisterRoute = location.pathname.includes("register");
  const isChatMediaRoute = location.pathname.includes("chatmedia");
  const isAuthenticated = useSelector(getAuthStatus);

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logout({ navigate }));
    endSession();
  };
  const headerClasses = `w-full z-10 top-0 flex items-center justify-center mx-auto px-5 sm:px-64 ${
    scrolling ? "fixed" : "sticky"
  } transition-all duration-300 ease-in-out`;
  if (isLoginRoute || isRegisterRoute || isChatMediaRoute) return null;

  return (
    <header className="">
      <div className={headerClasses}>
        <div className="w-4/5 mx-auto flex bg-gradient-to-r from-[#FFFFFF0D] via-black to-[#FFFFFF0D] py-5 px-10 rounded-b-2xl  transition-all duration-300 ease-in-out">
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
            {isAuthenticated ? (
              <div className="flex items-center">
                {/* <button
                onClick={handleLogout}
                className={`flex items-center sm:text-white font-medium rounded-lg bg-[#36D45A] px-2 sm:px-5 py-2 lg:py-2.5 mr-2`}
              >
                <span className="sm:block hidden">Logout</span>

                <svg
                  className="h-5 block"
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
              </button> */}
                {/* <div className="rounded-full border-2 border-basic">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 150 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_9381)">
                    <path
                      d="M104.334 84.9548C117.473 71.8164 114.997 48.0382 98.8033 31.8449C82.61 15.6517 58.8319 13.1752 45.6934 26.3137C32.5549 39.4522 35.0313 63.2303 51.2246 79.4236C67.4179 95.6169 91.196 98.0933 104.334 84.9548Z"
                      fill="#02A287"
                    />
                    <path
                      d="M123.27 19.8589L117.868 14.4572C113.329 9.94313 107.187 7.4093 100.785 7.4093C94.3829 7.4093 88.2411 9.94313 83.7014 14.4572L61.3 36.8433L104.468 72.8281L123.27 54.0258C127.784 49.4861 130.318 43.3443 130.318 36.9423C130.318 30.5403 127.784 24.3985 123.27 19.8589Z"
                      fill="#02A287"
                    />
                    <path
                      d="M101.743 96.0012C116.663 81.0815 116.663 56.8917 101.743 41.972C86.8231 27.0522 62.6334 27.0522 47.7136 41.972C32.7938 56.8917 32.7938 81.0815 47.7136 96.0012C62.6334 110.921 86.8231 110.921 101.743 96.0012Z"
                      fill="#02A287"
                    />
                    <path
                      d="M45.8705 94.9371C49.4485 91.3591 49.4485 85.558 45.8705 81.9799C42.2925 78.4019 36.4913 78.4019 32.9133 81.9799C29.3353 85.558 29.3353 91.3591 32.9133 94.9371C36.4913 98.5152 42.2925 98.5152 45.8705 94.9371Z"
                      fill="white"
                    />
                    <path
                      d="M116.081 94.9357C119.659 91.3577 119.659 85.5565 116.081 81.9785C112.503 78.4005 106.702 78.4005 103.124 81.9785C99.5462 85.5565 99.5462 91.3577 103.124 94.9357C106.702 98.5138 112.503 98.5137 116.081 94.9357Z"
                      fill="white"
                    />
                    <path
                      d="M75.7694 47.9938H73.2208C54.6923 47.9938 39.672 63.0141 39.672 81.5426V91.2375C39.672 109.766 54.6923 124.786 73.2208 124.786H75.7694C94.2979 124.786 109.318 109.766 109.318 91.2375V81.5426C109.318 63.0141 94.2979 47.9938 75.7694 47.9938Z"
                      fill="white"
                    />
                    <path
                      d="M74.4968 59.6893C84.8121 59.6893 93.1743 56.3302 93.1743 52.1866C93.1743 48.043 84.8121 44.684 74.4968 44.684C64.1815 44.684 55.8193 48.043 55.8193 52.1866C55.8193 56.3302 64.1815 59.6893 74.4968 59.6893Z"
                      fill="#02A287"
                    />
                    <path
                      d="M61.5074 86.7616C61.8474 84.6668 60.4249 82.693 58.3301 82.3529C56.2352 82.0129 54.2614 83.4354 53.9214 85.5302C53.5813 87.6251 55.0039 89.5989 57.0987 89.939C59.1935 90.279 61.1674 88.8565 61.5074 86.7616Z"
                      fill="#02A287"
                    />
                    <path
                      d="M94.3586 87.0453C94.8569 84.9824 93.5885 82.9061 91.5256 82.4078C89.4627 81.9095 87.3864 83.1779 86.8881 85.2408C86.3898 87.3037 87.6582 89.38 89.7211 89.8783C91.784 90.3766 93.8603 89.1082 94.3586 87.0453Z"
                      fill="#02A287"
                    />
                    <path
                      d="M53.2158 93.6857C53.2158 93.6857 62.5972 103.907 74.1678 103.907C85.7385 103.907 95.1229 93.6857 95.1229 93.6857H53.2158Z"
                      fill="#02A287"
                    />
                    <path
                      d="M84.6057 133.135H64.3844C62.591 133.135 60.8152 133.489 59.1584 134.175C57.5015 134.861 55.996 135.867 54.7279 137.135C53.4598 138.403 52.4539 139.909 51.7676 141.566C51.0813 143.223 50.728 144.999 50.728 146.792V155.461H58.7118V177.783H98.2651V146.792C98.2651 144.998 97.9118 143.222 97.2253 141.565C96.5388 139.908 95.5326 138.402 94.2642 137.134C92.9957 135.866 91.4899 134.86 89.8327 134.174C88.1755 133.488 86.3993 133.135 84.6057 133.135Z"
                      fill="#02A287"
                    />
                    <path
                      d="M66.0928 111.961H82.8976V134.442C82.8976 136.67 82.0125 138.807 80.437 140.382C78.8616 141.958 76.7248 142.843 74.4967 142.843C72.2687 142.843 70.1319 141.958 68.5564 140.382C66.9809 138.807 66.0958 136.67 66.0958 134.442V111.961H66.0928Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_9381">
                      <rect
                        width="150"
                        height="150"
                        rx="27.4042"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div> */}

                <button
                  data-popover-target="popover-user-profile"
                  type="button"
                  className="rounded-full border-2 border-basic"
                  onClick={() => setModalOpen(true)}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5_9381)">
                      <path
                        d="M104.334 84.9548C117.473 71.8164 114.997 48.0382 98.8033 31.8449C82.61 15.6517 58.8319 13.1752 45.6934 26.3137C32.5549 39.4522 35.0313 63.2303 51.2246 79.4236C67.4179 95.6169 91.196 98.0933 104.334 84.9548Z"
                        fill="#02A287"
                      />
                      <path
                        d="M123.27 19.8589L117.868 14.4572C113.329 9.94313 107.187 7.4093 100.785 7.4093C94.3829 7.4093 88.2411 9.94313 83.7014 14.4572L61.3 36.8433L104.468 72.8281L123.27 54.0258C127.784 49.4861 130.318 43.3443 130.318 36.9423C130.318 30.5403 127.784 24.3985 123.27 19.8589Z"
                        fill="#02A287"
                      />
                      <path
                        d="M101.743 96.0012C116.663 81.0815 116.663 56.8917 101.743 41.972C86.8231 27.0522 62.6334 27.0522 47.7136 41.972C32.7938 56.8917 32.7938 81.0815 47.7136 96.0012C62.6334 110.921 86.8231 110.921 101.743 96.0012Z"
                        fill="#02A287"
                      />
                      <path
                        d="M45.8705 94.9371C49.4485 91.3591 49.4485 85.558 45.8705 81.9799C42.2925 78.4019 36.4913 78.4019 32.9133 81.9799C29.3353 85.558 29.3353 91.3591 32.9133 94.9371C36.4913 98.5152 42.2925 98.5152 45.8705 94.9371Z"
                        fill="white"
                      />
                      <path
                        d="M116.081 94.9357C119.659 91.3577 119.659 85.5565 116.081 81.9785C112.503 78.4005 106.702 78.4005 103.124 81.9785C99.5462 85.5565 99.5462 91.3577 103.124 94.9357C106.702 98.5138 112.503 98.5137 116.081 94.9357Z"
                        fill="white"
                      />
                      <path
                        d="M75.7694 47.9938H73.2208C54.6923 47.9938 39.672 63.0141 39.672 81.5426V91.2375C39.672 109.766 54.6923 124.786 73.2208 124.786H75.7694C94.2979 124.786 109.318 109.766 109.318 91.2375V81.5426C109.318 63.0141 94.2979 47.9938 75.7694 47.9938Z"
                        fill="white"
                      />
                      <path
                        d="M74.4968 59.6893C84.8121 59.6893 93.1743 56.3302 93.1743 52.1866C93.1743 48.043 84.8121 44.684 74.4968 44.684C64.1815 44.684 55.8193 48.043 55.8193 52.1866C55.8193 56.3302 64.1815 59.6893 74.4968 59.6893Z"
                        fill="#02A287"
                      />
                      <path
                        d="M61.5074 86.7616C61.8474 84.6668 60.4249 82.693 58.3301 82.3529C56.2352 82.0129 54.2614 83.4354 53.9214 85.5302C53.5813 87.6251 55.0039 89.5989 57.0987 89.939C59.1935 90.279 61.1674 88.8565 61.5074 86.7616Z"
                        fill="#02A287"
                      />
                      <path
                        d="M94.3586 87.0453C94.8569 84.9824 93.5885 82.9061 91.5256 82.4078C89.4627 81.9095 87.3864 83.1779 86.8881 85.2408C86.3898 87.3037 87.6582 89.38 89.7211 89.8783C91.784 90.3766 93.8603 89.1082 94.3586 87.0453Z"
                        fill="#02A287"
                      />
                      <path
                        d="M53.2158 93.6857C53.2158 93.6857 62.5972 103.907 74.1678 103.907C85.7385 103.907 95.1229 93.6857 95.1229 93.6857H53.2158Z"
                        fill="#02A287"
                      />
                      <path
                        d="M84.6057 133.135H64.3844C62.591 133.135 60.8152 133.489 59.1584 134.175C57.5015 134.861 55.996 135.867 54.7279 137.135C53.4598 138.403 52.4539 139.909 51.7676 141.566C51.0813 143.223 50.728 144.999 50.728 146.792V155.461H58.7118V177.783H98.2651V146.792C98.2651 144.998 97.9118 143.222 97.2253 141.565C96.5388 139.908 95.5326 138.402 94.2642 137.134C92.9957 135.866 91.4899 134.86 89.8327 134.174C88.1755 133.488 86.3993 133.135 84.6057 133.135Z"
                        fill="#02A287"
                      />
                      <path
                        d="M66.0928 111.961H82.8976V134.442C82.8976 136.67 82.0125 138.807 80.437 140.382C78.8616 141.958 76.7248 142.843 74.4967 142.843C72.2687 142.843 70.1319 141.958 68.5564 140.382C66.9809 138.807 66.0958 136.67 66.0958 134.442V111.961H66.0928Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_9381">
                        <rect
                          width="150"
                          height="150"
                          rx="27.4042"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <div
                  data-popover
                  id="popover-user-profile"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block w-64 text-sm transition-opacity duration-300  border rounded-lg shadow-sm opacity-0 text-gray-400 bg-black border-gray-600"
                >
                  {user ? (
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <button
                            type="button"
                            onClick={handleLogout}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                      <p className="text-base font-semibold leading-none text-white mt-3">
                        Current Plan:{" "}
                        <span className="capitalize">{user?.plan}</span>
                      </p>
                      <p className="text-base font-semibold leading-none text-white mt-3">
                        Token: <span className="capitalize">{user?.token}</span>
                      </p>
                      <p className="text-base font-semibold leading-none text-white mt-3">
                        Role: <span className="capitalize">{user?.role}</span>
                      </p>
                      <p className="mb-1 text-sm font-semibold text-white mt-3">
                        {user.plan === "Free" && "Price: €1.49/credit"}
                        {user.plan === "Basic" && "Price: €1.29/credit"}
                        {user.plan === "Free" && "Price: €1.09/credit"}
                        {user.plan === "Free" && "Price: €0.99/credit"}
                      </p>
                      <span className="text-gray-400">
                        1 Credit = 30 Min of audio/video to text transcription.
                      </span>
                      {/* <ul className="flex text-sm">
                    <li className="mr-2">
                      <a href="#" className="hover:underline">
                        <span className="font-semibold text-white">799</span>
                        <span>Following</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        <span className="font-semibold text-white">3,758</span>
                        <span>Followers</span>
                      </a>
                    </li>
                  </ul> */}
                    </div>
                  ) : (
                    <img
                      src="./assets/img/loading.svg"
                      className="h-10"
                      alt="loading"
                    />
                  )}

                  <div data-popper-arrow></div>
                </div>
              </div>
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
      </div>
      {/* <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <UserProfile />
      </Modal> */}
    </header>
  );
};

export default Header;
