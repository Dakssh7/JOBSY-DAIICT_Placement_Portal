import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import login_bg from "../Assets/login_bg.jpg";
import { motion } from "framer-motion";

function Login() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3  h-screen"
    >
      <div className="ml-2 bg-gradient-to-r from-indigo-300 to-purple-400 m-auto shadow-2xl px-24 py-28 border border-gray-300 rounded-md text-center">
        <h2 className="text-3xl mt-[-70px]  font-bold tracking-tight">
          <IoIosPeople className="inline " /> Log-in / Sign-up
        </h2>
        <p className="tracking-wide leading-relaxed mt-7 max-w-2xl text-xl">
          Develop your portfolio, win challenges, and be hired from the front.
          Our goal is to build together, so come join us.
        </p>
        <button className="mt-9 text-2xl flex mx-auto w-fit px-5 py-3 rounded-md justify-center text-white transition-all duration-200 ease-in-out bg-[#0f0f0f] hover:bg-[#010101] active:bg-black">
          <BsGithub className="mr-2 mt-1" /> GitHub
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${login_bg})`,
        }}
        className="col-span-2 bg-contain bg-top bg-no-repeat"
      ></div>
    </motion.div>
  );
}

export default Login;
