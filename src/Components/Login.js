import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import { useDispatch } from "react-redux";
import login_bg from "../Assets/login_bg.jpg";
import axios from "../axiosConfig/axios";
import { setUser } from "../redux/userSlice";

function Login() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const dispatch = useDispatch();
  function submitHandler() {
    axios
      .post("/auth/login", {
        username,
        password,
      })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        alert("Wrong username or password,\nPlease try again!");
      });
    setPassword("");
    setUsername("");
  }
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
      style={{
        backgroundImage: `url(${login_bg})`,
      }}
      className="grid grid-cols-3 h-screen bg-auto bg-no-repeat bg-right bg-opacity-0"
    >
      <div className="ml-2 gradient m-auto shadow-2xl px-24 py-28 rounded-md text-center">
        <h2 className="text-3xl mt-[-70px]  font-bold tracking-tight">
          <IoIosPeople className="inline" /> Log-in / Sign-up
        </h2>
        <p className="tracking-wide leading-relaxed mt-7 max-w-2xl text-xl">
          Develop your portfolio, win challenges, and be hired from the front.
        </p>
        <div className="mt-3 rounded-md px-3">
          <label>
            <MdOutlineEmail className="inline mr-1 text-xl text-gray-800"></MdOutlineEmail>
            <input
              type="text"
              className="bg-transparent placeholder-black  p-1 w-[90%] pt-2 focus:border-b focus:border-black text-black focus:outline-none"
              placeholder="type username"
              name="tech"
              id="tech"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <MdOutlinePassword className="inline mr-1 text-xl text-gray-800"></MdOutlinePassword>
            <input
              type="password"
              className="mb-2 bg-transparent placeholder-black  p-1 w-[90%] pt-2 focus:border-b focus:border-black text-black focus:outline-none"
              placeholder="type password"
              name="city"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            onClick={() => submitHandler()}
            className="mt-1 font-bold border px-3 py-1 rounded-md border-black"
          >
            LOGIN
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
