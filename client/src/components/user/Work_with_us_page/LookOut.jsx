import React, { useEffect, useState } from "react";
import {
  Lookout1,
  Lookout2,
  Lookout3,
  Playbtn,
  VdoImg,
  playbtn3,
} from "../../../assets/images";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { BackendAPI } from "../../../config/backendPoint";
import axios from "axios";

const LookOut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [LookoutData, setLookoutData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (index) => {
    setSelectedVideo(LookoutData[index]?.lookoutVideo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleLookoutData = async () => {
      try {
        const response = await axios.get(`${BackendAPI}LookoutData`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setLookoutData(response.data.LookoutData);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleLookoutData();
    }
  }, [state, city, loading]);
  return (
    <div className="w-full h-screen bg-white mb-36">
      <div className="h-[250px] flex justify-center items-center mt-8">
        <div className="w-[554px] top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#323232] text-[55px] tracking-[0] leading-[normal]">
          Lookout our videos
        </div>
      </div>
      <div className="flex justify-between p-36 mt-[-150px]">
        <>
          <div className="w-[222px] h-[146px] relative">
            {/* <img
              className="absolute mt-80 left-0 transform -translate-y-1/2 object-cover"
              alt="Image"
              onClick={() => openModal(0)}
              src={Lookout2}
            /> */}
            <video
              className="absolute mt-80 left-0 transform -translate-y-1/2  rounded-3xl"
              onClick={() => openModal(0)}
              controls
              autoPlay
              controlsList="nodownload"
            >
              <source src={LookoutData[0]?.lookoutVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className=" absolute mt-80 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px]"
              alt="Ellipse"
              // onClick={openModal}
              onClick={() => openModal(0)}
              src={playbtn3}
            />
          </div>
          <div className="h-[398px] relative">
            <video
              className="w-[721px] h-[401px] top-0 left-0 rounded-3xl"
              onClick={() => openModal(2)}
              controls
              autoPlay
              controlsList="nodownload"
            >
              <source src={LookoutData[2]?.lookoutVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* <img
              className="w-[721px] h-[401px] top-0 left-0 object-cover"
              alt="Pexels any lane"
              // onClick={openModal}
              onClick={() => openModal(2)}
              src={Lookout1}
            /> */}
            <img
              className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[121px] h-[121px]"
              alt="Ellipse"
              // onClick={openModal}
              onClick={() => openModal(2)}
              src={playbtn3}
            />
          </div>
        </>
        {isModalOpen && (
          <div className="fixed top-1/4 left-1/4 w-[50%] h-[50%] bg-black bg-opacity-75 flex justify-center items-center">
            <div className="relative">
              <video
                className="w-full h-full z-5 rounded-xl overflow-hidden"
                controls
                autoPlay
              >
                <source src={selectedVideo} type="video/mp4" />
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
          <video
            className="w-[222px] h-[146px] top-0 left-0 rounded-3xl"
            onClick={() => openModal(1)}
            controls
            autoPlay
            controlsList="nodownload"
          >
            <source src={LookoutData[1]?.lookoutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <img
            className="w-[222px] h-[146px] top-0 left-0 object-cover"
            alt="Image"
            src={Lookout3}
            onClick={() => openModal(1)}
          /> */}
          <img
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px]"
            alt="Ellipse"
            onClick={() => openModal(1)}
            src={playbtn3}
          />
        </div>
      </div>
    </div>
  );
};

export default LookOut;
