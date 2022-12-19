import React, { useEffect } from "react";
import Homedata from "./Homedata";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BsShare, BsSave } from "react-icons/bs";
import { motion } from "framer-motion";

function Explorework() {
  useEffect(() => {});
const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={blogVariants}
    >
      <Homedata />
    </motion.div>
  );
}

export default Explorework;
