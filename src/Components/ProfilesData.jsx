import { motion } from "framer-motion";
import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { BsFillChatDotsFill, BsSave2, BsShare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig/axios";

export default function ProfilesData({
  userID,
  userImage,
  userImageALT,
  userName,
  userDesignation,
  userLocation,
  skills,
  availabilities,
}) {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  function viewHandler(id) {
    user
      ? navigate(`/hiretalent/${id}`)
      : alert('you need to login first')
  }

  function shareHandler(id) {
    navigator.clipboard.writeText(`${axios.defaults.baseURL}/hiretalent/${id}`);
    alert("link copied to clipboard!");
  }
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      <div className="CARD shadow-md  shadow-rose-100">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400 rounded-md p-2">
          <img
            src={`${userImage}`}
            alt={userImageALT}
            className="h-16 w-16 rounded-full self-center mr-4 bg-transparent"
          />
          <div>
            <h1 className="font-bold text-lg">{userName}</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              {userDesignation}
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              {userLocation}
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
          <button
            onClick={() => shareHandler(userID)}
            className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   "
          >
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 border-none rounded-md   ">
            <BsSave2 className="inline mr-"></BsSave2> SAVE
          </button>
          <button
            onClick={() => viewHandler(userID)}
            className=" items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   "
          >
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
