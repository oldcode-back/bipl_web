import React, { useEffect, useState } from "react";
import { BromagLogo, India } from "../../../assets/images";
import { MdLocationPin, MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { fetchStatesAndCities } from "../../../utils/fetchStateAndCities";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { isEmpty } from "lodash";
import '../../../css/navbar.css'

const Navbar = ({ newImage }) => {
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [indianStates, setIndianStates] = useState([]);
  const [indianCities, setIndianCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [dummy, setDummy] = useState(false);
  const [home, setHome] = useState(true);

  const { state, city, setCityAndState, loading } = useStateAndCity();

  const navigate = useNavigate();

  const handleWhoWeAre = () => {
    setHome(false);
    navigate("/who-we-are");
  };

  const handleWorkWithUs = () => {
    setHome(false);
    navigate("/work-with-us");
  };

  const handleHomeView = () => {
    setHome(true);
    navigate("/");
  };

  const handleStateSubmit = (state) => {
    localStorage.setItem("state", state.target.value);
    setSelectedState(state.target.value);
    setCityAndState(state.target.value, "");
    localStorage.removeItem("city");
    setDummy(true);
  };

  console.log(isEmpty(city), dummy);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { states, cities } = await fetchStatesAndCities();
      setIndianStates(states);
      setIndianCities(cities);
    } catch (error) {
      console.error("Error fetching Indian states and cities:", error);
    }
  };

  const handleCitySubmit = (city) => {
    console.log(city, "selected");
    localStorage.setItem("city", city);
    setCityName(city);
    fetchData();
    setCityAndState(state, city);
  };

  useEffect(() => {
    const currentState = localStorage.getItem("state");
    setStateName(currentState);
    setSelectedState(currentState);

    const currentCity = localStorage.getItem("city");
    if (currentCity !== undefined && currentCity !== null) {
      setCityName(currentCity);
    }
  }, [
    selectedState,
    localStorage.getItem("state"),
    localStorage.getItem("city"),
    cityName,
    stateName,
  ]);

  const filteredCities = indianCities[stateName] || [];

  const handleSlide = () => {
    window.open(newImage, "_blank");
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div className="absolute top-0 left-0 w-full h-[200px] z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-[102px] h-[91px] cursor-pointer"
              alt="Bromag Logo"
              src={BromagLogo}
              onClick={() => {
                navigate("/");
              }}
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
                    value={state}
                    onChange={(e) => {
                      handleStateSubmit(e);
                    }}
                    className="w-full text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                  >
                    <option
                      value={"Select state"}
                      className={`${
                        isEmpty(state) && dummy ? "block" : "hidden"
                      }`}
                    >
                      Select your state
                    </option>
                    {indianStates.map((res, index) => (
                      <option key={index} value={res}>
                        {res}
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
                    value={city}
                    onChange={(e) => handleCitySubmit(e.target.value)}
                    className="w-full text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                  >
                    <option
                      value={"Select city"}
                      className={`${
                        isEmpty(city) && dummy ? "block" : "hidden"
                      }`}
                    >
                      Select your city
                    </option>
                    {filteredCities.map((data, i) => {
                      return (
                        <>
                          <option key={i} value={data}>
                            {data}
                          </option>
                        </>
                      );
                    })}
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
            <button onClick={handleWhoWeAre}>Who We Are</button>
            <button onClick={handleWorkWithUs}>Work With Us</button>
          </div>
        </div>
        {home && (
          <div onClick={handleSlide} className=" w-full h-[500px]"></div>
        )}
      </div> */}

<div className="menu-navbar absolute top-0 left-0 w-full h-[200px] z-10">
     <div className="flex items-center justify-between">
     <div className="flex items-center">
     <img
              className="bromag-img  cursor-pointer"
              alt="Bromag Logo"
              src={BromagLogo}
              onClick={() => {
                navigate("/");
              }}
            />
            <div className="nav-state  flex items-center">
              <div className=" relative">
                <div className="nav-state-1 bg-neutral-100 rounded-lg overflow-hidden">
                  <img
                    src={India}
                    alt="india"
                    className="w-[17px] h-[13px] absolute top-[50%] transform -translate-y-1/2 left-2"
                  />
                  <select
                    name="state"
                    id="state"
                    value={state}
                    onChange={(e) => {
                      handleStateSubmit(e);
                    }}
                    className="nav-state-text text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                  >
                    <option
                      value={"Select state"}
                      className={`${
                        isEmpty(state) && dummy ? "block" : "hidden"
                      }`}
                    >
                      Select your state
                    </option>
                    {indianStates.map((res, index) => (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    ))}
                  </select>
                  <MdArrowDropDown className="w-[18px] h-[18px] absolute top-[50%] transform -translate-y-1/2 right-2" />
                </div>
              </div>
              <div className=" ml-4 relative">
                <div className="w-[170px] h-[33px] bg-neutral-100 rounded-lg overflow-hidden relative">
                  <MdLocationPin className="w-[20px] h-[18px] absolute top-[50%] transform -translate-y-1/2 left-2" />
                  <select
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => handleCitySubmit(e.target.value)}
                    className="w-full text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                  >
                    <option
                      value={"Select city"}
                      className={`${
                        isEmpty(city) && dummy ? "block" : "hidden"
                      }`}
                    >
                      Select your city
                    </option>
                    {filteredCities.map((data, i) => {
                      return (
                        <>
                          <option key={i} value={data}>
                            {data}
                          </option>
                        </>
                      );
                    })}
                  </select>
                  <MdArrowDropDown className="w-[18px] h-[18px] absolute top-[50%] transform -translate-y-1/2 right-2 cursor-pointer" />
                </div>
              </div>
            </div>
            </div>
     </div>
     <div className="menubar-nav block lg:hidden ">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-1000"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg" stroke="white"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg" stroke="white"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
    <div
       className={` h-25 font-semibold text-white text-20 space-x-20 mr-32 [font-family:'Montserrat-SemiBold',Helvetica]  text-[20px] tracking-[0] leading-[normal]    w-full  lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
        <div className="nav-ul lg:flex-grow">
        
         <button onClick={handleHomeView} htmlFor="" className="nav-li block  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Home
            </button>
        
         <button onClick={handleHomeView} htmlFor="" className="nav-li block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
         Who We Are
            </button>
        
         <button onClick={handleHomeView} htmlFor="" className="nav-li block  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
         Work With Us
            </button>
         
       </div>
       
     </div>

    
        
        {home && (
          <div onClick={handleSlide} className=" w-full h-[500px]"></div>
        )}
   </div>
    </>
  );
};

export default Navbar;
