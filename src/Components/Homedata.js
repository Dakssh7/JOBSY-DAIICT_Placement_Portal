import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { BiCoinStack } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

function Homedata() {
  const [tech, setTech] = useState("");
  const [city, setCity] = useState("");

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      id="talent_section"
      className=" flex rounded-md shadow-inner  my-18 flex-col items-center justify-center gap-5 "
    >
      <h1 className="mt-2 text-center text-3xl font-semibold text-black">
        Find a perfect talent
      </h1>
      <blockquote className="mt-0 px-3">
        <div className="relative max-w-3xl text-center text-lg font-medium md:flex-grow">
          <svg
            className="absolute top-0 left-5 h-8 w-8 -translate-x-3 -translate-y-2 transform text-blue-100"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
          </svg>
          <p className="relative text-base">
            Just because people tell you it can't be done, that doesn't
            necessarily mean that it can't be done. It just means that they
            can't do it.
          </p>
        </div>
        <div className="mt-4">
          <div className="mt-4 flex  items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-5 w-5"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M20 12H4"
              ></path>
            </svg>
            <span className="italic">
              <div class="Typewriter" data-testid="typewriter-wrapper">
                <span className="Typewriter__wrapper">Anders Hejlsberg</span>
                <span className="Typewriter__cursor"></span>
              </div>
            </span>
          </div>
        </div>
      </blockquote>
      {/* fixme: button shadow - shadow-lg shadow-slate-200 */}
      <div className="grid grid-cols-3  gap-5 w-full my-2 p-3">
        <label>
          <BiCoinStack className="inline mr-1 text-xl"></BiCoinStack>
          <input
            type="text"
            className="bg-transparent  p-1 w-[90%] pt-2 focus:border-b focus:border-blue-300 focus:outline-none"
            placeholder="What tech stack you are looking?"
            name="tech"
            id="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />
        </label>
        <label>
          <GoLocation className="inline mr-1 text-xl"></GoLocation>
          <input
            type="text"
            className="bg-transparent  p-1 w-[90%] pt-2 focus:border-b focus:border-blue-300 focus:outline-none"
            placeholder="Where you are looking for?"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button className="transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-500 text-white px-4 py-2 text-base  rounded-md w-1/2 ml-20 flex justify-center ">
          <BsSearch className="inline self-center mr-1"></BsSearch> Search
        </button>
      </div>
    </motion.div>
  );
}

export default Homedata;
