import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../Assets/logo.png";
import { logout } from "../redux/userSlice";
import { Usercard } from "./Usercard";

function Navbar() {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logout());
    setIsOptionsOpen(false);
  }

  function viewProfileHandler() {
    user
      ? navigate(`/hiretalent/${user.id}`)
      : toast.error("You need to login first!");
  }

  return (
    <div className="flex items-center  justify-between mb-2 text-lg font-medium p-1 ">
      <NavLink activeClassName='active' to="/">
        <img className="h-12 ml-2 brightness-150" src={`${logo}`} alt="logo" />
      </NavLink>
      <ul className="flex items-center px-3 my-1 last:pr-0">
        <li className="navbar-li">
          <NavLink activeClassName='active' to="/explorework"> Explore Work</NavLink>
        </li>
        <li className="navbar-li">
          <NavLink activeClassName='active' to="/hiretalent"> Hire Talents</NavLink>
        </li>
        <li className="navbar-li">
          <NavLink activeClassName='active' to="/getstarted"> Get Started</NavLink>
        </li>
        <li
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          className="w-10 h-10 cursor-pointer"
        >
          {user ? <Usercard user={user} /> : <FaUserCircle size={40} />}
          {isOptionsOpen && (
            <div className="w-28 absolute z-10 text-right right-1 mr-1">
              <div
                onClick={() => viewProfileHandler()}
                className="navbar-li text-right mx-0"
              >
                View Profile
              </div>
              <hr />
              <div
                className="navbar-li text-right mx-0"
                onClick={() => handleLogOut()}
              >
                Logout
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
