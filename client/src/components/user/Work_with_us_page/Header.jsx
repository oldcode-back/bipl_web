import React from "react";
import { WorkWithUsBanner } from "../../../assets/images";

const Header = () => {
  return (
    <div className="relative w-full h-[775px]">
      <img
        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
        className="w-full h-screen object-cover"
        alt="Rectangle"
        src={WorkWithUsBanner}
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="w-[800px] h-[157px]">
          <p className="ml-[-240px] mb-6 [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#ececec] text-[65px] tracking-[0] leading-[normal]">
            Join Our Team and Shape the Future Together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
