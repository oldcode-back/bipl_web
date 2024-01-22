import React, { useEffect, useState } from "react";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import axios from "axios";
import { BackendAPI } from "../../../config/backendPoint";
import { Carousel } from "antd";
import { MustVisit1 } from "../../../assets/images";

const Banner = () => {
  const [MustVisitBanners, setMustVisitBanners] = useState([]);

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleMustVisitBanners = async () => {
      try {
        const response = await axios.get(`${BackendAPI}mustVisitBanners`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setMustVisitBanners(response.data.MustVisitBanners);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleMustVisitBanners();
    }
  }, [state, city, loading]);
  return (
    <div>
      <div className="relative w-full h-[650px] mb-[75px] bg-gray-50">
        <Carousel autoplay
        dots={false}
        >
          {MustVisitBanners && MustVisitBanners.length > 0 ? (
            MustVisitBanners.map((value, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute bottom-0 w-full h-[650px] bg-[#00000080] transition-all duration-300`}
                ></div>
                <img
                  key={index}
                  className="w-full h-[650px]"
                  alt={`Banner ${index + 1}`}
                  src={value.bannerPic}
                />
              </div>
            ))
          ) : (
            <img
              style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
              className="w-full h-[650px]"
              alt="Default Banner"
              src={MustVisit1}
            />
          )}
        </Carousel>
        {/* <Carousel autoplay>
          {MustVisitBanners && MustVisitBanners.length > 0 ? (
            MustVisitBanners.map((value, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute bottom-0 w-full h-[775px] bg-[#00000080] transition-all duration-300`}
                ></div>
                <img
                  key={index}
                  className="w-full h-[775px] object-cover "
                  alt={`Banner ${index + 1}`}
                  src={value.bannerPic}
                />
              </div>
            ))
          ) : (
            <img
              style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
              className="w-full h-[700px]  object-cover "
              alt="Default Banner"
              src={MustVisit1}
            />
          )}
        </Carousel> */}

        {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full top-0 left-0 space-y-4">
            <div className="text-center [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#eeeeee] text-[80px] tracking-[0] leading-[normal]">
              Must visit Restuarants
            </div>
            <p className="ml-[270px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
              must-visit for anyone passionate about great food
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
