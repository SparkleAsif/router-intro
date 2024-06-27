import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "underline text-gray-400 font-bold": ""}
      
    >
        {children}
    </NavLink>
  );
};

export default ActiveLink;
