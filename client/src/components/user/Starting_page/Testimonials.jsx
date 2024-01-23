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
import '../../../css/testimonal.css'

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
    <div className="w-full ellipseh h-[824px] mb-18 relative text-center  mb-20 ">
      <p className="ellipsetext text-center font-bold text-[#323232] text-5xl leading-normal pt-5 pb-28">
        BROMAG Testimonial
      </p>

      <div className="container-test flex justify-center items-center h-[550px] relative">
        <img
          className="ellipse2  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 rounded-xl overflow-hidden cursor-pointer"
          alt="Ellipse"
          src={Background}
        />

        {/* <img
          src={CoverImg}
          onClick={openModal}
          alt="cover pic"
          className="w-[427px] h-[203px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 rounded-xl overflow-hidden"
        /> */}
        <div className="ellipse w-[100px]">
          <img
            className="ellipse1 w-[75px] h-[75px] absolute top-10 l z-10"
            alt="Ellipse"
            src={Ellipse4}
          />
          <img
            className="ellipse1 ellipse12 w-[75px] h-[75px] absolute top-52  z-10"
            alt="Ellipse"
            src={Ellipse5}
          />
          <img
            className="ellipse1 w-[38px] h-[38px] absolute top-96  z-10"
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
            className="cover-img  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 rounded-xl overflow-hidden"
            alt="Mask group"
            src={CoverImg}
          />
          <img
            className="ellipse  relative mb-18"
            alt="Ellipse"
            onClick={openModal}
            src={Playbtn}
          />
        </div>
        {isModalOpen && (
          <div className="fixed ellipse3 top-1/4 left-1/4 w-[50%] h-[50%] bg-black bg-opacity-75 flex justify-center items-center">
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
            className="ellipse4  w-[75px] h-[75px] absolute top-10  z-10"
            alt="Ellipse"
            src={Ellipse1}
          />
          <img
            className="ellipse4  ellipse5 w-[75px] h-[75px] absolute top-52  z-10"
            alt="Ellipse"
            src={Ellipse2}
          />
          <img
            className="ellipse4 w-[38px] h-[38px] absolute top-96  z-10"
            alt="Ellipse"
            src={Ellipse3}
          />  
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
