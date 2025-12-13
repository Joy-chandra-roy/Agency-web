import React from "react";
import { NavLink } from "react-router";
import NavItems from "./NavItems";


const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm max-w-screen-2xl mx-auto container px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavItems/>
          </ul>
        </div>
        <NavLink to='/' className="text-xl font-bold flex items-center gap-2">
        <img src="logo.png"/>
        <span className="text-[#697077] hidden sm:block">AgWeb</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <NavItems/>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <NavLink to='/' className="btn btn-outline btn-primary px-8 hidden sm:flex">Login</NavLink>

        <NavLink to='/' className="btn btn-primary  ">Free trial</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
