import React from "react";
import { RectangleImage, joinBromag } from "../../../assets/images";

const Header = () => {
  return (
    <div className="relative w-full h-[775px]">
      <img
        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
        className="w-full h-screen object-cover"
        alt="Rectangle"
        src={RectangleImage}
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <img
          src={joinBromag}
          alt="join-logo"
          className=" w-[750px] h-20 mb-10 mt[-2px]"
        />
      </div>
    </div>
  );
};

export default Header;
