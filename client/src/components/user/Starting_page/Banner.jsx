import React from "react";
import { Dining, OrderCall, Online, Takeaway } from "../../../assets/images";

const Banner = () => {
  
  
  return (
    <div
      className="w-full flex justify-center items-center space-x-5 relative mb-28"
      style={{ marginTop: "-120px" }}
    >
      <div className="flex justify-center space-x-14">
        <div className="flex justify-center space-x-8">
          <div className="w-[255px] h-[250px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center ">
            <>
              <img
                className="w-[255px] h-[230px] mt-1 rounded-md"
                alt="Image"
                src={Online}
              />
              <p className="w-[255px] h-[50px] mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
                Online order
              </p>
            </>
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          <div className="w-[255px] h-[250px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
            <img
              className="w-[255px] h-[230px] mt-1 rounded-md"
              alt="Image"
              src={Dining}
            />
            <p className="w-[255px] h-[50px] mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
              Dining
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          <div className="w-[255px] h-[250px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
            <img
              className="w-[255px] h-[230px] mt-1 rounded-md"
              alt="Image"
              src={OrderCall}
            />
            <p className="w-[255px] h-[50px] mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
              Call for order
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          <div className="w-[255px] h-[250px] bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
            <img
              className="w-[255px] h-[230px] mt-1 rounded-md"
              alt="Image"
              src={Takeaway}
            />
            <p className="w-[255px] h-[50px] mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232] text-[20px] tracking-[0] leading-[normal]">
              Take away
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
