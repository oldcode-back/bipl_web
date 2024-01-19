import React, { useEffect, useState } from "react";
import { WhoWeAre1 } from "../../../assets/images";
import { Carousel } from "antd";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { BackendAPI } from "../../../config/backendPoint";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [WhoWeAreBanners, setWhoWeAreBanners] = useState([]);

  const navigate = useNavigate();

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleWhoWeAreBanners = async () => {
      try {
        const response = await axios.get(`${BackendAPI}whoWeAreBanners`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setWhoWeAreBanners(response.data.WhoWeAreBanners);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleWhoWeAreBanners();
    }
  }, [state, city, loading]);
  return (
    <div>
      <div className="relative w-full h-[775px] mb-[75px] bg-white">
      <Carousel autoplay>
          {WhoWeAreBanners && WhoWeAreBanners.length > 0 ? (
            WhoWeAreBanners.map((value, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute bottom-0 w-[1550px] h-[790px] bg-[#00000080] transition-all duration-300`}
                ></div>
                <img
                  key={index}
                  className="w-full "
                  alt={`Banner ${index + 1}`}
                  src={value.bannerPic}
                />
              </div>
            ))
          ) : (
            <img
              style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
              className="w-full"
              alt="Default Banner"
              src={WhoWeAre1}
            />
          )}
        </Carousel>
        {/* <Carousel autoplay>
          {WhoWeAreBanners && WhoWeAreBanners.length > 0 ? (
            WhoWeAreBanners.map((value, index) => (
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
              src={WhoWeAre1}
            />
          )}
        </Carousel> */}
        {/* <img
          style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
          className="w-full h-[700px]  object-cover"
          alt="Rectangle"
          src={WhoWeAre1}
        /> */}

        {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full top-0 left-0 space-y-4">
            <div className="text-center [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#eeeeee] text-[80px] tracking-[0] leading-[normal]">
              Elegance in Every Bite
            </div>
            <div className=" h-[61px] text-center">
              <div className=" top-5 left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#d9d9d9] text-[50px] tracking-[0] leading-[normal]">
                Discover BROMAG’s story
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
