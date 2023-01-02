import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { useSelector } from "react-redux";
import { Usercard } from "./Usercard";

function Navbar() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="flex items-center  justify-between mb-2 text-lg font-medium p-1 ">
      <Link to="/">
        <img className="h-12 ml-2" src={`${logo}`} alt="logo" />
      </Link>
      <ul className="flex items-center px-3 my-1 last:pr-0">
        <li className="navbar-li">
          <Link to="/explorework"> Explore Work</Link>
        </li>
        <li className="navbar-li">
          <Link to="/hiretalent"> Hire Talents</Link>
        </li>
        <li className="navbar-li">
          <Link to="/getstarted"> Get Started</Link>
        </li>
        <div className="w-10 h-10 mr-1">
          {user ? (
            <Usercard user={user} />
          ) : (
            <FaUserCircle size={40} className='bg-transparent'/>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
