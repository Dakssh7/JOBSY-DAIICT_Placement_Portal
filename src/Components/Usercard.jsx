import React from "react";

export const Usercard = ({ user }) => {
  return (
    <>
      <img
        className="border border-gray-600 rounded-full object-contain"
        src={user.image}
        alt="user profile picture"
      />
    </>
  );
};
