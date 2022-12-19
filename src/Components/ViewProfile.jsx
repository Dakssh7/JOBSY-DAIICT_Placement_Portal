import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";
import { BsGithub, BsLinkedin, BsSave2, BsShare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiSuitcaseLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import user_image from "../Assets/user_image.jpg";
import { motion } from "framer-motion";

function ViewProfile() {
  const githubURL = null,
    linkedInURL = null;
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-4 gap-4"
    >
      <div className="CARD p-1">
        <div className="flex bg-gradient-to-r from-indigo-300 to-purple-400  p-2">
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
        <div className="social-media-links">
          <a href={githubURL} className="cursor-pointer  m-3">
            <BsGithub className="inline scale-125"></BsGithub>
          </a>
          <a href={linkedInURL} className="cursor-pointer  m-3">
            <BsLinkedin className="inline scale-125"></BsLinkedin>
          </a>
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

          <button className="items-baseline p-2 my-3 w-fit justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-gradient-to-r from-indigo-300 to-purple-400 text-gray-900 hover:bg-gradient-to-t hover:from-indigo-400 hover:to-purple-500  border-none rounded-md   ">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
      <div className="col-span-3 p-1">
        <h2 className="font-bold mb-1">About me</h2>
        hi, i'm Rushikesh Adhav, a passionate self-taught full stack web
        developer and a freelance software engineer from india. my passion for
        software lies with dreaming up ideas and making them come true with
        elegant interfaces. i take great care in the experience, architecture,
        and code quality of the things I build.
        <h2 className="font-bold mt-2 mb-1">My Projects:</h2>
        Project Links in a list
      </div>
    </motion.div>
  );
}

export default ViewProfile;
