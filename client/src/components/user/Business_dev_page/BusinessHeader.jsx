import React from "react";
import {
  RectangleImage,
  BromagLogo,
  India,
  joinBromag,
  business1,
  shade,
} from "../../../assets/images";
import { MdLocationPin, MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BusinessHeader = ({ backgroundImage, heading }) => {
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const navigate = useNavigate();

  const handleWhoWeAre = () => {
    navigate("/who-we-are");
  };

  const handleWorkWithUs = () => {
    navigate("/work-with-us");
  };

  const handleHomeView = () => {
    navigate("/");
  };

  return (
    <div className="relative w-full h-[700px]">
      <img
        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
        className="w-full h-screen object-cover"
        alt="Rectangle"
        src={backgroundImage}
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-[102px] h-[91px]"
                alt="Bromag Logo"
                src={BromagLogo}
              />
              <div className="ml-4 flex items-center">
                <div className="relative">
                  <div className="w-[180px] h-[33px] bg-neutral-100 rounded-lg overflow-hidden">
                    <img
                      src={India}
                      alt="india"
                      className="w-[17px] h-[13px] absolute top-[50%] transform -translate-y-1/2 left-2"
                    />
                    <select
                      name="state"
                      id="state"
                      className="w-full text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                    >
                      <option value="">Select your state</option>
                      {indianStates.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <MdArrowDropDown className="w-[18px] h-[18px] absolute top-[50%] transform -translate-y-1/2 right-2" />
                  </div>
                </div>
                <div className="ml-4 relative">
                  <div className="w-[170px] h-[33px] bg-neutral-100 rounded-lg overflow-hidden relative">
                    <MdLocationPin className="w-[20px] h-[18px] absolute top-[50%] transform -translate-y-1/2 left-2" />
                    <select
                      name="city"
                      id="city"
                      className="w-full text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                    >
                      <option value="">Select your city</option>
                      <option value="">City 1</option>
                      <option value="">City 2</option>
                      <option value="">City 3</option>
                    </select>
                    <MdArrowDropDown className="w-[18px] h-[18px] absolute top-[50%] transform -translate-y-1/2 right-2 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-25 font-semibold text-white text-20 space-x-20 mr-32 [font-family:'Montserrat-SemiBold',Helvetica]  text-[20px] tracking-[0] leading-[normal]">
              <button onClick={handleHomeView} htmlFor="">
                Home
              </button>

              <button onClick={handleWhoWeAre}>Who we are</button>
              <button onClick={handleWorkWithUs}>Work with us</button>
            </div>
          </div>
        </div>
        =
        <div className="w-full h-[253px] mt-[500px] rounded-lg relative">
          <img
            className="h-[243px] w-full object-cover rounded-lg"
            alt="Rectangle"
            src={shade}
          />
          <div  className="absolute top-1/2 ml-96 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center">
            {heading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
