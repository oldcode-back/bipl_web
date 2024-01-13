import React from "react";
import { shade } from "../../../assets/images";

const BusinessHeader = ({ backgroundImage, heading, headingStyle }) => {
  return (
    <div className="relative w-full h-[700px]">
      <img
        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
        className="w-full h-screen object-cover"
        alt="Rectangle"
        src={backgroundImage}
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        =
        <div className="w-full h-[253px] mt-[500px] rounded-lg relative">
          <img
            className="h-[243px] w-full object-cover rounded-lg"
            alt="Rectangle"
            src={shade}
          />
          {/* <div  className="absolute top-1/2 ml-96 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center"> */}
          <div
            className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center ${headingStyle}`}
          >
            {heading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
