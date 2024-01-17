import React, { useEffect, useState } from "react";
import { RectangleImage, joinBromag } from "../../../assets/images";
import { Carousel } from "antd";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { BackendAPI } from "../../../config/backendPoint";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [HomeBanners, setHomeBanners] = useState([]);

  const navigate = useNavigate();

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleHomeBanners = async () => {
      try {
        const response = await axios.get(`${BackendAPI}homeBanners`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setHomeBanners(response.data.HomeBanners);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleHomeBanners();
    }
  }, [state, city, loading]);

  const handleImageClick = (link) => {
    console.log("Image clicked:", link);
    window.open(link, "_blank");
  };

  return (
    <div className="relative w-full h-[775px]">
      <Carousel autoplay>
        {HomeBanners && HomeBanners.length > 0 ? (
          HomeBanners.map((value, index) => (
            <div key={index} className="relative">
              {/* <div
                className={`absolute bottom-0 w-full h-[700px] bg-[#00000080] transition-all duration-300`}
              ></div> */}
              <Link
                key={index}
                // to={value.link}
                onClick={() => handleImageClick(value.link)}
                className="w-full h-[700px] z-50 bg-red-800 object-cover cursor-pointer"
              >
                <img
                  alt={`Banner ${index + 1}`}
                  src={value.bannerPic}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          ))
        ) : (
          <img
            style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
            className="w-full h-[700px]  object-cover"
            alt="Default Banner"
            src={RectangleImage}
          />
        )}
      </Carousel>

      {/* <img
        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
        className="w-full h-screen object-cover"
        alt="Rectangle"
        src={RectangleImage}
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <img
          src={joinBromag}
          alt="join-logo"
          className=" w-[750px] h-20 mb-10 mt[-2px]"
        />
      </div> */}
    </div>
  );
};

export default Header;
