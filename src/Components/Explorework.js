import React from "react";
import Homedata from "./Homedata";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BsShare, BsSave } from "react-icons/bs";

function Explorework() {
  return (
    <>
      <Homedata />
      <div className="mt-2">
        <div className="z-10 flex w-full items-center justify-start gap-3 bg-white p-3">
          <img
            loading="lazy"
            className="aspect-square object-cover rounded-full h-12 w-12"
            src="https://findcoder.fra1.digitaloceanspaces.com/c25a791edb42e2ad1d3d491c26c74828"
            alt="fc_avatar"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h1 className="line-clamp-1 font-medium text-black">
              iNeuron Landing Page
            </h1>
            <div className="flex w-full items-center justify-between">
              <p className="line-clamp-1 text-sm text-gray-700">
                @rishabhthakur
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex w-fit rounded-sm items-start justify-start gap-4 overflow-hidden border-y-[1px] border-card">
          <iframe
            className="max-w-[100%] h-auto min-w-[350px]"
            src="https://www.youtube.com/watch?v=3YLog5mrAYM&list=RDMM3YLog5mrAYM"
          ></iframe>
        </div>
        <div className="d flex w-1/3 items-end justify-between p-3">
          <div className="flex w-full flex-col items-start justify-center">
            <div className="flex w-full items-center justify-between gap-3">
              <div className="mb-1 flex w-full items-center justify-start gap-3">
                <button className=" text-base inline-flex items-center justify-start">
                  <AiOutlineHeart></AiOutlineHeart> 49
                </button>
                <button className=" text-base inline-flex items-center justify-start">
                  <FaRegCommentDots></FaRegCommentDots> 21
                </button>
                <button className=" text-base inline-flex items-center justify-start">
                  <AiOutlineEye></AiOutlineEye> 452
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
      </div>
    </>
  );
}

export default Explorework;
