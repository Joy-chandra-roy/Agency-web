import React from "react";
import { NavLink } from "react-router";


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
            <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/service'>Services</NavLink>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <NavLink to='/'>Web development</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Software development</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Gigital marketing</NavLink>
                </li>
                
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          </ul>
        </div>
        <NavLink to='/' className="text-xl font-bold flex items-center gap-2">
        <img src="logo.png"/>
        <span className="text-[#697077] hidden sm:block">AgWeb</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/service'>Services</NavLink>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <NavLink to='/'>Web development</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Software development</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Gigital marketing</NavLink>
                </li>
                
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <NavLink to='/' className="btn btn-outline btn-primary px-8 hidden sm:flex">Login</NavLink>

        <NavLink to='/' className="btn btn-primary px-8 hidden sm:flex">Free trial</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
