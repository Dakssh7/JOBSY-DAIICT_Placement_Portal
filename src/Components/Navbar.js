import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import { Usercard } from "./Usercard";
import { logout } from '../redux/userSlice'
import { useState } from "react";

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(logout());
    setIsOptionsOpen(false);
  }
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  return (
    <div className="flex items-center  justify-between mb-2 text-lg font-medium p-1 ">
      <Link to="/">
        <img className="h-12 ml-2 brightness-150" src={`${logo}`} alt="logo" />
      </Link>
      <ul className="flex items-center px-3 my-1 last:pr-0">
        <NavLink className="navbar-li">
          <Link to="/explorework"> Explore Work</Link>
        </NavLink>
        <NavLink className="navbar-li">
          <Link to="/hiretalent"> Hire Talents</Link>
        </NavLink>
        <NavLink className="navbar-li">
          <Link to="/getstarted"> Get Started</Link>
        </NavLink>
        <NavLink
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          className="w-10 h-10"
        >
          {user ? <Usercard user={user} /> : <FaUserCircle size={40} />}
          {isOptionsOpen && (
            <div className="w-28 absolute z-10 text-right right-1 mr-1">
              <div className="navbar-li text-right mx-0">View Profile</div>
              <hr />
              <div
                className="navbar-li text-right mx-0"
                onClick={() => handleLogOut()}
              >
                Logout
              </div>
            </div>
          )}
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
