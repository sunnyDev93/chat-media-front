import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuItem = ({ link, title }) => {
  const location = useLocation();
  return (
    <li>
      <NavLink
        to={link}
        className={`${
          location.pathname === link
            ? "text-white font-semibold"
            : "text-white bg-transparent"
        }  rounded-lg px-1 xl:px-4 w-full text-[10px] md:text-lg`}
        aria-current="page"
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
