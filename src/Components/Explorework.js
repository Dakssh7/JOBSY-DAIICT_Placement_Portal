import React, { useEffect, useState } from "react";
import Homedata from "./Homedata";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BsShare, BsSave } from "react-icons/bs";
import { motion } from "framer-motion";
import axios from "../axiosConfig/axios";
import ExploreworkData from "./ExploreworkData";

function Explorework() {
  const [users, setUsers] = useState();
  const getData = () => {
    axios
      .get("/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getData();
  }, []);

  if (!users) {
    return (
    <h1 className="text-3xl text-center">Loading...</h1>
  )
}

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      <Homedata />
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => {
          return (
            <ExploreworkData
              userID={user.id}
              imgSRC={user.image}
              imgALT={`${user.firstName}+'image'`}
              heading={user.username}
              userHandle={user.username}
              projectVideoSRC={user.image}
              likesCount={Math.round(user.height)}
              commentsCount={Math.round(user.weight)}
              viewsCount={user.age}
            //todo: skills is remaining
            />
          );
        })}
        </div>
      
    </motion.div>
  );
}

export default Explorework;
