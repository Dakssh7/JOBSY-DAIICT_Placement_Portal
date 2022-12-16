import React from "react";
import Homedata from "./Homedata";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BsShare, BsSave } from "react-icons/bs";
import { motion } from "framer-motion";

function ExploreworkData({
  userID,
  imgSRC,
  imgALT,
  heading,
  userHandle,
  projectVideoSRC,
  likesCount,
  commentsCount,
  viewsCount,
  skills,
}) {
  return (
    <>
      <Homedata />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-2"
      >
        <div className="z-10 flex w-full items-center justify-start gap-3 bg-white p-3">
          <img
            loading="lazy"
            className="aspect-square object-cover rounded-full h-12 w-12"
            src={imgSRC}
            alt={imgALT}
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h1 className="line-clamp-1 font-medium text-black">{heading}</h1>
            <div className="flex w-full items-center justify-between">
              <p className="line-clamp-1 text-sm text-gray-700">{userHandle}</p>
            </div>
          </div>
        </div>
        <div className="relative flex w-fit rounded-sm items-start justify-start gap-4 overflow-hidden border-y-[1px] border-card">
          <iframe
            className="max-w-[100%] h-auto min-w-[350px]"
            src={projectVideoSRC}
          ></iframe>
        </div>
        <div className="d flex w-1/3 items-end justify-between p-3">
          <div className="flex w-full flex-col items-start justify-center">
            <div className="flex w-full items-center justify-between gap-3">
              <div className="mb-1 flex w-full items-center justify-start gap-3">
                <button className=" text-base inline-flex items-center justify-start">
                  <AiOutlineHeart></AiOutlineHeart> {likesCount}
                </button>
                <button className=" text-base inline-flex items-center justify-start">
                  <FaRegCommentDots></FaRegCommentDots> {commentsCount}
                </button>
                <button className=" text-base inline-flex items-center justify-start">
                  <AiOutlineEye></AiOutlineEye> {viewsCount}
                </button>
              </div>
              <div className="relative undefined">
                <div
                  className="active:outline-none"
                  id="headlessui-popover-button-:re:"
                  aria-expanded="false"
                >
                  <button className="flex items-center justify-center">
                    <BsShare></BsShare>
                  </button>
                </div>
              </div>
              <button className="ml-auto">
                <BsSave></BsSave>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-[-1em] font-medium items-start justify-start gap-2 p-3">
          <span className="border rounded-md py-0  px-2 w-min border-blue-600">
            html
          </span>
          <span className="border rounded-md py-0  px-2 w-min border-blue-600">
            css
          </span>
          <span className="border rounded-md py-0  px-2 w-min border-blue-600">
            javascript
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default ExploreworkData;
