import React from "react";
import { WhoWeAre1 } from "../../../assets/images";

const Header = () => {
  return (
    <div>
      <div className="relative w-full h-[700px] bg-white">
        <img
          style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
          className="w-full h-[700px]  object-cover"
          alt="Rectangle"
          src={WhoWeAre1}
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full top-0 left-0 space-y-4">
            <div className="text-center [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#eeeeee] text-[80px] tracking-[0] leading-[normal]">
              Elegance in Every Bite
            </div>
            <div className=" h-[61px] text-center">
              <div className=" top-5 left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#d9d9d9] text-[50px] tracking-[0] leading-[normal]">
                Discover BROMAG’s story
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
