import React from "react";
import { WhoWeAre4, WhoWeAre3, WhoWeAre2 } from "../../../assets/images";

const WhoSection = () => {
  return (
    <div className="h-[600px] w-full bg-white flex justify-center items-center mb-44 pt-20">
      <div className="flex flex-col ml-[-330px]">
        <div className="text-center pt-16 pb-12 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#323232] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Who We Are
        </div>
        <div className=" m-8">
          <p className=" w-[708px] top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#484848] text-[27px] tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
            <br />
            Duis aute irure dolor in reprehenderit in voluptate
          </p>
        </div>
      </div>

      <div class="grid ml-20 ">
        <div className="w-[277px] h-[282px]">
          <img
            className=" w-[277px] h-[282px] top-0 left-0 object-cover"
            alt="Image"
            src={WhoWeAre3}
          />
        </div>

        <div className="w-[216px] h-[220px] absolute mx-48 mt-44">
          <img
            className=" w-[216px] h-[220px] top-0 left-0 object-cover rounded-2xl"
            alt="Image"
            src={WhoWeAre4}
          />
        </div>
        <div className="w-[163px] h-[166px] mt-16 ml-[350px] absolute">
          <img
            className=" w-[163px] h-[166px] top-0 left-0 object-cover"
            alt="Image"
            src={WhoWeAre2}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoSection;
