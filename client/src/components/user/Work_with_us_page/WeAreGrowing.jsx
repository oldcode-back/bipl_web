import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import {
  employee1,
  employee2,
  employee3,
  sanjana,
  slideLg,
  slideSm,
  vector,
} from "../../../assets/images";

import "./WeAreGrowing.css";

const imagesArray = [
  {
    name: "Sanjana",
    src: sanjana,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Arvindh",
    src: employee3,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Mohan",
    src: employee2,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Akshaya",
    src: employee1,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Sanjana",
    src: sanjana,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Arvindh",
    src: employee3,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Mohan",
    src: employee2,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Akshaya",
    src: employee1,
    position: "sales team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const WeAreGrowing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full h-screen bg-white mt-[-30px]">
      <div className="text-center">
        <div className="my-16 font-semibold text-[#323232] text-[50px] tracking-[0] leading-[normal]">
          We’re Growing
        </div>
      </div>
      <Swiper
        grid={{
          rows: 1,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Grid, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1520: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        style={{ height: "620px", marginLeft: "250px" }}
        // style={{ height: "620px", marginLeft: "50px" }}
      >
        {imagesArray.map((value, index) => (
          <SwiperSlide key={index} className="grid grid-cols-4 gap-48 ">
            <div
              className="w-[270px] h-[388px] relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className="w-full h-full object-cover rounded-2xl"
                alt={`value ${index + 1}`}
                src={value.src}
              />
              <div
                className={`!absolute bottom-0 w-full ${
                  hoveredIndex === index ? "h-[390px]" : "h-[109px]"
                } bg-[#00000080] rounded-[20px] transition-all duration-300`}
              >
                {hoveredIndex === index ? (
                  <div className="text-white mt-20">
                    <div className="my-6 flex justify-center items-center">
                      <div>
                        <p className="w-[103px] text-center font-semibold text-white text-[25px] tracking-[0] leading-[normal]">
                          {value.name}
                        </p>
                        <p className="text-center font-medium text-white text-[15px] tracking-[0] leading-[normal]">
                          {value.position}
                        </p>
                      </div>
                    </div>
                    <div className="w-full text-center max-w-full p-4 font-medium text-white text-[14px] tracking-[0] leading-[normal] whitespace-pre-line">
                      {value.description}{" "}
                    </div>
                  </div>
                ) : (
                  <div className="text-white flex justify-center items-center">
                    <div className="my-6">
                      <p className="w-[103px] text-center font-semibold text-white text-[25px] tracking-[0] leading-[normal]">
                        {value.name}
                      </p>
                      <p className="text-center font-medium text-white text-[15px] tracking-[0] leading-[normal]">
                        {value.position}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WeAreGrowing;
