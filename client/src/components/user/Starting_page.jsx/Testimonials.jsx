import React from "react";
import { Ellipse1, VdoImg, Background } from "../../../assets/images";

const Testimonials = () => {
  return (
    <div className="w-full h-[824px] relative text-center mt-28">
      <p className="font-bold text-[#323232] text-4xl leading-normal pt-5">
        Owners Testimonial
      </p>

      <div className="flex justify-center items-center h-[550px] relative">
        <img
          className="w-[1100px] h-[424px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
          alt="Ellipse"
          src={Background}
        />
        <img
          className="w-[75px] h-[75px] absolute top-0 left-0 z-10"
          alt="Ellipse"
          src={Ellipse1}
        />
        <video
          className="w-[427px] h-[203px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
          controls
        >
          <source src={VdoImg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Testimonials;
