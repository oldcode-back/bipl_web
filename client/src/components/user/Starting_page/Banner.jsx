import React from "react";
import { Dining, OrderCall, Online, Takeaway } from "../../../assets/images";
import '../../../css/startbanner.css'
const Banner = () => {
  
  
  return (
    <div
      className="container-main w-full flex justify-center items-center space-x-5 relative mb-18"
      style={{ marginTop: "-120px" }}
    >
      <div className="container flex justify-center ">
        <div className="item flex justify-center space-x-8">
          <div className="item-online  bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center ">
            <>
              <img
                className="w-[255px] h-[230px] mt-1 rounded-md"
                alt="Image"
                src={Online}
              />
              <p className="item-name  item-name-online mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232]  tracking-[0] leading-[normal]">
                Online order
              </p>
            </>
          </div>
        </div>

        <div className="item flex justify-center space-x-8">
          <div className="item-online bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
            <img
              className="w-[255px] h-[230px] mt-1 rounded-md"
              alt="Image"
              src={Dining}
            />
            <p className="item-name mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232]  tracking-[0] leading-[normal]">
              Dining
            </p>
          </div>
        </div>

        <div className="item flex justify-center space-x-8">
          <div className="item-online bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
            <img
              className="w-[255px] h-[230px] mt-1 rounded-md"
              alt="Image"
              src={OrderCall}
            />
            <p className="item-name mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232]  tracking-[0] leading-[normal]">
              Call for order
            </p>
          </div>
        </div>

        <div className="item flex justify-center space-x-8">
          <div className="item-online bg-[#fbfbfb] rounded-[20px] shadow-[0px_9px_21px_#47474740] flex flex-col justify-center items-center">
            <img
              className="w-[255px] h-[230px] mt-1 rounded-md"
              alt="Image"
              src={Takeaway}
            />
            <p className="item-name mb-3 text-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#323232]  tracking-[0] leading-[normal]">
              Take away
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
