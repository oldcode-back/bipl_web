import React from "react";
import { Map, coll1, coll2, coll3 } from "../../../assets/images";

const ChildBanner = () => {
  return (
    <div>
      <div className="w-full h-[100px] pt-20 pb-10">
        <p className="text-center font-bold text-[#323232] text-4xl leading-normal">
          Collections
        </p>
        <p className="text-center pt-3 font-medium text-[#646464] text-2xl leading-normal">
          Our Restaurant Showcase
        </p>
      </div>
      <div className="w-full h-[700px] relative flex justify-center items-center">
        <div className="w-[1000px] h-[500px] relative">
          <img className="w-full h-full object-cover" alt="Map" src={Map} />
          
          {/* First Collection */}
          <div className="absolute w-[230px] h-[287px] top-[50px] left-[100px] object-cover">
            <img className="w-full h-full object-cover" alt="Image" src={coll1} />
            <div className="absolute top-0 left-0 text-white font-semibold text-[22px] tracking-[0] leading-[normal]">
              Must visit Restaurants
            </div>
          </div>

          {/* Second Collection */}
          <div className="absolute w-[230px] h-[287px] top-[220px] left-[400px] object-cover">
            <img className="w-full h-full object-cover" alt="Image" src={coll2} />
            <div className="absolute top-0 left-0 text-white font-semibold text-[22px] tracking-[0] leading-[normal]">
              Partner Restaurants
            </div>
          </div>

          {/* Third Collection */}
          <div className="absolute w-[230px] h-[287px] top-[50px] left-[830px] object-cover">
            <img className="w-full h-full object-cover" alt="Image" src={coll3} />
            <div className="absolute top-0 left-0 text-white font-semibold text-[22px] tracking-[0] leading-[normal]">
              Upcoming Restaurants
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildBanner;
