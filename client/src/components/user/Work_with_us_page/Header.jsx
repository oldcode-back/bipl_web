import React, { useEffect, useState } from "react";
import { WorkWithUsBanner } from "../../../assets/images";
import { Carousel } from "antd";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { BackendAPI } from "../../../config/backendPoint";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [WorkWithUsBanners, setWorkWithUsBanners] = useState([]);

  const navigate = useNavigate();

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleWorkWithUsBanners = async () => {
      try {
        const response = await axios.get(`${BackendAPI}workWithUsBanners`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setWorkWithUsBanners(response.data.WorkWithUsBanners);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleWorkWithUsBanners();
    }
  }, [state, city, loading]);
  return (
    <div className="relative w-full h-[650px] mb-[75px]">
      <Carousel autoplay
        dots={false}
      >
          {WorkWithUsBanners && WorkWithUsBanners.length > 0 ? (
            WorkWithUsBanners.map((value, index) => (
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
              src={WorkWithUsBanner}
            />
          )}
        </Carousel>
      {/* <Carousel autoplay>
        {WorkWithUsBanners && WorkWithUsBanners.length > 0 ? (
          WorkWithUsBanners.map((value, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute bottom-0 w-full h-[775px] bg-[#00000080] transition-all duration-300`}
              ></div>

              <img
                alt={`Banner ${index + 1}`}
                src={value.bannerPic}
                className="w-full h-[775px] object-cover"
              />
            </div>
          ))
        ) : (
          <img
            style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
            className="w-full h-[775px]  object-cover"
            alt="Default Banner"
            src={WorkWithUsBanner}
          />
        )}
      </Carousel> */}
      {/* <img
        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
        className="w-full h-screen object-cover"
        alt="Rectangle"
        src={WorkWithUsBanner}
      /> */}

      {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="w-[800px] h-[157px]">
          <p className="ml-[-240px] mb-6 [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#ececec] text-[65px] tracking-[0] leading-[normal]">
            Join Our Team and Shape the Future Together
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
