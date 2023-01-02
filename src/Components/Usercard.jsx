import React from "react";

export const Usercard = ({ user }) => {
  return (
    <>
      <img
        className="rounded-full object-contain"
        src={user.image}
        alt="user profile picture"
      />
    </>
  );
};
