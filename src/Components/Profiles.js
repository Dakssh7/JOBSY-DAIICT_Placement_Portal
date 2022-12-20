import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";
import { BsSave2, BsShare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiSuitcaseLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import user_image from "../Assets/user_image.jpg";
import { motion } from "framer-motion";

function Profiles() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
      className="m-1.5 grid grid-cols-3 gap-x-5 gap-y-7"
    >
      <div className="CARD shadow-md  shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${user_image}`}
            alt="user image"
            className="h-16 w-16 rounded-full self-center mr-4 bg-transparent"
          />
          <div>
            <h1 className="font-bold text-lg">USER</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              Designation
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              Location
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <CgProfile className="inline mr-1  mb-[3px]" />
            VIEW
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>

      {/* fixme: extra cards  */}

      <div className="CARD shadow-lg shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${user_image}`}
            alt="user image"
            className="h-16 w-16 rounded-full self-center mr-4"
          />
          <div>
            <h1 className="font-bold text-lg">USER</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              Designation
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              Location
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <CgProfile className="inline mr-1  mb-[3px]" />
            VIEW
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
      <div className="CARD shadow-lg shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${user_image}`}
            alt="user image"
            className="h-16 w-16 rounded-full self-center mr-4"
          />
          <div>
            <h1 className="font-bold text-lg">USER</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              Designation
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              Location
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <CgProfile className="inline mr-1  mb-[3px]" />
            VIEW
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
      <div className="CARD shadow-lg shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${user_image}`}
            alt="user image"
            className="h-16 w-16 rounded-full self-center mr-4"
          />
          <div>
            <h1 className="font-bold text-lg">USER</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              Designation
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              Location
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <CgProfile className="inline mr-1  mb-[3px]" />
            VIEW
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
      <div className="CARD shadow-lg shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${user_image}`}
            alt="user image"
            className="h-16 w-16 rounded-full self-center mr-4"
          />
          <div>
            <h1 className="font-bold text-lg">USER</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              Designation
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              Location
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <CgProfile className="inline mr-1  mb-[3px]" />
            VIEW
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
      <div className="CARD shadow-lg shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${user_image}`}
            alt="user image"
            className="h-16 w-16 rounded-full self-center mr-4"
          />
          <div>
            <h1 className="font-bold text-lg">USER</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              Designation
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              Location
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <CgProfile className="inline mr-1  mb-[3px]" />
            VIEW
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
      <div className="CARD shadow-lg shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${user_image}`}
            alt="user image"
            className="h-16 w-16 rounded-full self-center mr-4"
          />
          <div>
            <h1 className="font-bold text-lg">USER</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              Designation
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              Location
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-blue-600 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-gray-600 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
            <p className="border m-1 inline border-gray-700 rounded-md py-1 px-2">
              HTML
            </p>
          </div>
        </div>
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <CgProfile className="inline mr-1  mb-[3px]" />
            VIEW
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Profiles;
