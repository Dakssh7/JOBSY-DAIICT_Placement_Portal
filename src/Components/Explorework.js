import React, { useEffect } from "react";
import Homedata from "./Homedata";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BsShare, BsSave } from "react-icons/bs";
import { motion } from "framer-motion";

function Explorework() {
  useEffect(() => {});

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Homedata />
    </motion.div>
  );
}

export default Explorework;
