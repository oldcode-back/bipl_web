import React from "react";
import {
  RectangleImage,
  BromagLogo,
  India,
  joinBromag,
} from "../../../assets/images";

const Navbar = () => {
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

  return (
    <div className="relative w-full h-[775px]">
      <img
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

        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-[102px] h-[91px]"
                alt="Bromag Logo"
                src={BromagLogo}
              />
              <div className="ml-4">
                <div className="w-[200px] h-[33px] bg-neutral-100 rounded-[15px] relative">
                  <img
                    src={India}
                    alt="india"
                    className="w-[17px] h-[13px] absolute top-[50%] transform -translate-y-1/2 left-2"
                  />
                  <select
                    name="cars"
                    id="cars"
                    // className="w-full h-full bg-transparent appearance-none px-8 py-1"
                    className="w-full h-full pl-7 text-center py-1 bg-transparent"
                  >
                    <option value="">Select your state </option>
                    {indianStates.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="h-25 font-semibold text-white text-20 space-x-20 mr-32 [font-family:'Montserrat-SemiBold',Helvetica]  text-[20px] tracking-[0] leading-[normal]">
              <button htmlFor="">Home</button>
              <button htmlFor="">Who we are</button>
              <button htmlFor="">Work with us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
