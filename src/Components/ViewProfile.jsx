import React from "react";
import { motion } from "framer-motion";

function ViewProfile() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
          transition={{ duration: 0.8 }}
          className='grid grid-cols-6 gap-2'
    ></motion.div>
  );
}

export default ViewProfile;
