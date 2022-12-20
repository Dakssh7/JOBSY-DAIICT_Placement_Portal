import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <div className="flex  flex-row justify-between mb-2 text-lg font-medium p-2 text-gray-700">
      <Link to="/">
        <img className="h-12 ml-2" src={`${logo}`} alt="logo" />
      </Link>
      <ul className="flex flex-row px-3 my-1">
        <li className="mx-10 hover:text-black">
          <Link to="/explorework"> Explore Work</Link>
        </li>
        <li className="mx-10 hover:text-black">
          <Link to="/hiretalent"> Hire Talents</Link>
        </li>

        <li className="mx-10 hover:text-black">
          <Link to="/getstarted"> Get Started</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
