import React, { useState } from "react";
import {
  Ellipse1,
  VdoImg,
  Background,
  CoverImg,
  Playbtn,
  Ellipse4,
  Ellipse5,
  Ellipse6,
  Ellipse2,
  Ellipse3,
} from "../../../assets/images";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-[824px] relative text-center mt-44 mb-20">
      <p className="text-center font-bold text-[#323232] text-5xl leading-normal pt-5 pb-28">
        Owners Testimonial
      </p>

      <div className="flex justify-center items-center h-[550px] relative">
        <img
          className="w-[1200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 rounded-xl overflow-hidden cursor-pointer"
          alt="Ellipse"
          src={Background}
        />

        {/* <img
          src={CoverImg}
          onClick={openModal}
          alt="cover pic"
          className="w-[427px] h-[203px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 rounded-xl overflow-hidden"
        /> */}
        <div className="w-[100px]">
          <img
            className="w-[75px] h-[75px] absolute top-10 left-[450px] z-10"
            alt="Ellipse"
            src={Ellipse4}
          />
          <img
            className="w-[75px] h-[75px] absolute top-52 left-[300px] z-10"
            alt="Ellipse"
            src={Ellipse5}
          />
          <img
            className=" w-[38px] h-[38px] absolute top-96 left-[440px] z-10"
            alt="Ellipse"   
            src={Ellipse6}
          />
        </div>
        <div>
          {/* <img
            src={CoverImg}
            alt="cover pic"
            className="w-[730px] h-[310px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 rounded-xl overflow-hidden"
          /> */}

          <img
            className="w-[427px] h-[211px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 rounded-xl overflow-hidden"
            alt="Mask group"
            src={CoverImg}
          />
          <img
            className=" w-[100px] h-[100px] relative mb-18"
            alt="Ellipse"
            onClick={openModal}
            src={Playbtn}
          />
        </div>
        {isModalOpen && (
          <div className="fixed top-1/4 left-1/4 w-[50%] h-[50%] bg-black bg-opacity-75 flex justify-center items-center">
            <div className="relative">
              <video
                className="w-full h-full z-5 rounded-xl overflow-hidden"
                controls
              >
                <source src={VdoImg} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="absolute top-2 right-2 rounded-md px-3 text-white text-sm bg-red-500 cursor-pointer"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        )}

        <div className="w-[100px]">
          <img
            className="w-[75px] h-[75px] absolute top-10 left-[1150px] z-10"
            alt="Ellipse"
            src={Ellipse1}
          />
          <img
            className="w-[75px] h-[75px] absolute top-52 left-[1250px] z-10"
            alt="Ellipse"
            src={Ellipse2}
          />
          <img
            className=" w-[38px] h-[38px] absolute top-96 left-[1180px] z-10"
            alt="Ellipse"
            src={Ellipse3}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
