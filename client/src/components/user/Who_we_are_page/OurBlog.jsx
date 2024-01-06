import React from "react";
import {
  ourBlog1,
  ourBlog2,
  ourBlog3,
  ourBlogBg,
} from "../../../assets/images";
import { useNavigate } from "react-router-dom";

const OurBlog = () => {
  const navigate = useNavigate();

  const handleBusinessDevView = () => {
    navigate("/business-dev");
  };
  return (
    <div className="mb-96">
      <div className="bg-white h-screen ">
        <div className="relative w-full h-[261px]">
          <img
            className="w-full h-[261px] top-0 left-0"
            alt="Rectangle"
            src={ourBlogBg}
          />
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-[#ececec] text-[55px] tracking-[0] leading-[normal] whitespace-nowrap">
            Our Blogs
          </div>
          <div className="absolute top-1/3 mt-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 space-y-2 text-center">
            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ececec] text-[27px] tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className="flex space-x-28 justify-center mb-10">
            <div
              onClick={handleBusinessDevView}
              className="relative w-[355px] h-[311px]"
            >
              <img
                className="w-[397px] h-[353px] object-cover"
                alt="Mask group"
                src={ourBlog1}
              />
              <div className="absolute w-[355px] h-[157px] bottom-[-6px] left-0 rounded-[0px_0px_30px_30px] shadow-[0px -4px 4px #00000040] bg-gradient-to-t from-black to-transparent" />
              <div className="absolute w-[261px] top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#eaeaea] text-[22px] tracking-[0] leading-[normal]">
                Business development
              </div>
            </div>

            <div className="relative w-[355px] h-[311px]">
              <img
                className="w-[397px] h-[353px] object-cover"
                alt="Mask group"
                src={ourBlog2}
              />
              <div className="absolute w-[355px] h-[157px] bottom-[-6px] left-0 rounded-[0px_0px_30px_30px] shadow-[0px -4px 4px #00000040] bg-gradient-to-t from-black to-transparent" />
              <div className="absolute  w-[315px] top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#eaeaea] text-[22px] tracking-[0] leading-[normal]">
                How to increase your <br /> orders
              </div>
            </div>

            <div className="relative w-[355px] h-[311px]">
              <img
                className="w-[397px] h-[353px] object-cover"
                alt="Mask group"
                src={ourBlog3}
              />
              <div className="absolute w-[355px] h-[157px] bottom-[-6px] left-0 rounded-[0px_0px_30px_30px] shadow-[0px -4px 4px #00000040] bg-gradient-to-t from-black to-transparent" />
              <div className="absolute  w-[190px] top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#eaeaea] text-[22px] tracking-[0] leading-[normal]">
                BROMAG results
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
