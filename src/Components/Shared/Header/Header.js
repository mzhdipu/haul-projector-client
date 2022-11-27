import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuItems from "./MenuItems";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="section-container navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <MenuItems></MenuItems>

            </ul>
          </div>

          <a className="font-bold normal-case text-xl"><Link to="/">Haul Projector</Link></a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <MenuItems></MenuItems>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;
