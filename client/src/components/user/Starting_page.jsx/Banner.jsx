import React from "react";
import { Dining, OrderCall, Online, Takeaway } from "../../../assets/images";

const Banner = () => {
  return (
    <div
      className="w-full flex justify-center items-center space-x-5 relative mb-24"
      style={{ marginTop: "-150px" }}
    >
      <div className="flex justify-center space-x-8">
        <div className="w-[250px] h-[230px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <img
              className="w-[250px] h-[132px] left-0 object-cover"
              alt="Image"
              src={Online}
            />
          </div>
          <p className="w-[137px] py-4 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
            Call for order
          </p>
        </div>

        <div className="w-[250px] h-[230px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <img
              className="w-[250px] h-[132px] left-0 object-cover"
              alt="Image"
              src={Dining}
            />
          </div>
          <p className="w-[137px] py-4 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
            Call for order
          </p>
        </div>
        <div className="w-[250px] h-[230px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <img
              className="w-[250px] h-[132px] left-0 object-cover"
              alt="Image"
              src={OrderCall}
            />
          </div>
          <p className="w-[137px] py-4 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
            Call for order
          </p>
        </div>
        <div className="w-[250px] h-[230px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <img
              className="w-[250px] h-[132px] left-0 object-cover"
              alt="Image"
              src={Takeaway}
            />
          </div>
          <p className="w-[137px] py-4 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
            Call for order
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
