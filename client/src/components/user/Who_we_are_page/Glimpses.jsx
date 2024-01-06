import React from "react";
import {
  Glimpses1,
  Glimpses2,
  Glimpses3,
  Glimpses4,
  Glimpses5,
} from "../../../assets/images";

const Glimpses = () => {
  return (
    <div className="bg-white pb-52">
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-center font-bold text-[#323232] text-6xl tracking-0 leading-normal whitespace-nowrap mb-28">
        Glimpses of BROMAG
      </div>

      <div className="w-[480px] h-[450px] absolute mt-[-86px] ">
        <img
          className="w-full h-full object-cover rounded-2xl border-2 "
          alt="Image"
          src={Glimpses2}
        />
      </div>

      <div className=" mb-[520px] ml-44">
        <div className="flex space-x-44 relative ">
          <div className="w-[230px] h-[290px] relative ">
            <img
              className="w-full h-full object-cover"
              alt="image"
              src={Glimpses1}   
            />
          </div>

          <div className="w-[425px] h-[275px] relative ">
            <img
              className="w-full h-full object-cover mt-16"
              alt="Image"
              src={Glimpses3}
            />
          </div>
        </div>

        <div className="flex mt-10">
          <div className="w-[425px] h-[275px] relative ">
            <img
              className="w-full h-full object-cover ml-[-146px] mt-64"
              alt="Image"
              src={Glimpses4}
            />
          </div>
          <div className="w-[300px] h-[330px] relative ">
            <img
              className="w-full h-full object-cover ml-[-28px] mt-40"
              alt="Image"
              src={Glimpses5}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Glimpses;
