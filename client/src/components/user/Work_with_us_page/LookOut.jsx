import React, { useState } from "react";
import {
  Lookout1,
  Lookout2,
  Lookout3,
  Playbtn,
  VdoImg,
  playbtn3,
} from "../../../assets/images";

const LookOut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-screen bg-white mb-36">
      <div className="h-[250px] flex justify-center items-center mt-8">
        <div className="w-[554px] top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#323232] text-[55px] tracking-[0] leading-[normal]">
          Lookout our videos
        </div>
      </div>
      <div className="flex justify-between p-36 mt-[-150px]">
        <div className="w-[222px] h-[146px] relative">
          <img
            className="absolute mt-80 left-0 transform -translate-y-1/2 object-cover"
            alt="Image"
            src={Lookout2}
          />
          <img
            className=" absolute mt-80 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px]"
            alt="Ellipse"
            onClick={openModal}
            src={playbtn3}
          />
          {/* <div className="absolute mt-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px] bg-black rounded-full" /> */}
        </div>
        <div className="h-[398px] relative">
          <img
            className="w-[721px] h-[401px] top-0 left-0 object-cover"
            alt="Pexels any lane"
            onClick={openModal}
            src={Lookout1}
          />
          <img
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[121px] h-[121px]"
            alt="Ellipse"
            onClick={openModal}
            src={playbtn3}
          />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[121px] h-[121px] bg-black rounded-full" /> */}
        </div>
        {isModalOpen && (
          <div className="fixed top-1/4 left-1/4 w-[50%] h-[50%] bg-black bg-opacity-75 flex justify-center items-center">
            <div className="relative">
              <video
                className="w-full h-full z-5 rounded-xl overflow-hidden"
                controls
                autoPlay
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
        <div className="w-[222px] h-[146px] relative">
          <img
            className="w-[222px] h-[146px] top-0 left-0 object-cover"
            alt="Image"
            src={Lookout3}
          />
          <img
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px]"
            alt="Ellipse"
            onClick={openModal}
            src={playbtn3}
          />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px] bg-black rounded-full" /> */}
        </div>
      </div>
    </div>
  );
};

export default LookOut;
