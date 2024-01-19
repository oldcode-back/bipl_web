import React, { useEffect, useState } from "react";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import axios from "axios";
import { BackendAPI } from "../../../config/backendPoint";
import { Carousel } from "antd";
import { Upcoming1 } from "../../../assets/images";

const Header = () => {
  const [UpcomingBanners, setUpcomingBanners] = useState([]);

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handleUpcomingBanners = async () => {
      try {
        const response = await axios.get(`${BackendAPI}upcomingBanners`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setUpcomingBanners(response.data.UpcomingBanners);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handleUpcomingBanners();
    }
  }, [state, city, loading]);
  return (
    <div>
      <div className="relative w-full h-[790px] mb-[75px] bg-gray-50">
        <Carousel autoplay>
          {UpcomingBanners && UpcomingBanners.length > 0 ? (
            UpcomingBanners.map((value, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute bottom-0 w-[1550px] h-[790px] bg-[#00000080] transition-all duration-300`}
                ></div>
                <img
                  key={index}
                  className="w-full"
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
              src={Upcoming1}
            />
          )}
        </Carousel>
        {/* <Carousel autoplay>
          {UpcomingBanners && UpcomingBanners.length > 0 ? (
            UpcomingBanners.map((value, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute bottom-0 w-full h-[790px] bg-[#00000080] transition-all duration-300`}
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
              className="w-full h-[790px]"
              alt="Default Banner"
              src={Upcoming1}
            />
          )}
        </Carousel> */}
        {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full top-0 left-0 space-y-4">
            <div className="text-center [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#eeeeee] text-[80px] tracking-[0] leading-[normal]">
              Upcoming Restuarants
            </div>
            <p className="ml-[270px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
              our upcoming restaurant is set to redefine dining experiences
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
