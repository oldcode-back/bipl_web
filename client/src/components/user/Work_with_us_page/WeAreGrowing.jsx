import React from "react";
import { sanjana } from "../../../assets/images";

const imagesArray = [sanjana, sanjana, sanjana, sanjana];

const WeAreGrowing = () => {
  return (
    <div className="w-full h-screen bg-white mt-[-30px]">
      <div className="text-center">
        <div className="my-16 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#323232] text-[50px] tracking-[0] leading-[normal]">
          We’re Growing
        </div>
      </div>
      <div className="grid grid-cols-4 gap-9">
        {imagesArray.map((image, index) => (
          <div key={index} className="w-[270px] h-[388px]">
            <img
              className="w-full h-full object-cover"
              alt={`Image ${index + 1}`}
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeAreGrowing;
