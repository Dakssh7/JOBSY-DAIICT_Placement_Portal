import React from "react";
import Typed from "react-typed";
import landing_bg from "../Assets/landing_bg.jpg";

export default function Landingpage() {
  return (
    <div
      className="grid grid-cols-2 bg-[#faf9ff] h-screen w-screen bg-contain bg-no-repeat bg-right"
      style={{ backgroundImage: `url(${landing_bg})` }}
    >
      <div className="flex justify-center w-full rounded-md ">
        <Typed
          className="block text-6xl m-auto text-opacity-400 text-[#896bff] font-bold"
          strings={[
            "{ Collab With Other Developers }",
            "{ Find Ideal Candidate }",
            "{ Showcase Your Work }",
            "{ Show Off Your Skills! }",
          ]}
          typeSpeed={50}
          backSpeed={100}
          backDelay={1000}
          loop
        />
      </div>
    </div>
  );
}
