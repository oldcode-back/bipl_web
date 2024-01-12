import React, { useEffect, useState } from "react";
import { BromagLogo, India, Partners1 } from "../../../assets/images";
import { MdLocationPin, MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { fetchStatesAndCities } from "../../../utils/fetchStateAndCities";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { isEmpty } from "lodash";

const Header = () => {
  // const [stateName, setStateName] = useState("");
  // const [cityName, setCityName] = useState("");

  // const indianStates = [
  //   "Andhra Pradesh",
  //   "Arunachal Pradesh",
  //   "Assam",
  //   "Bihar",
  //   "Chhattisgarh",
  //   "Goa",
  //   "Gujarat",
  //   "Haryana",
  //   "Himachal Pradesh",
  //   "Jharkhand",
  //   "Karnataka",
  //   "Kerala",
  //   "Madhya Pradesh",
  //   "Maharashtra",
  //   "Manipur",
  //   "Meghalaya",
  //   "Mizoram",
  //   "Nagaland",
  //   "Odisha",
  //   "Punjab",
  //   "Rajasthan",
  //   "Sikkim",
  //   "Tamil Nadu",
  //   "Telangana",
  //   "Tripura",
  //   "Uttar Pradesh",
  //   "Uttarakhand",
  //   "West Bengal",
  //   "Andaman and Nicobar Islands",
  //   "Chandigarh",
  //   "Dadra and Nagar Haveli and Daman and Diu",
  //   "Lakshadweep",
  //   "Delhi",
  //   "Puducherry",
  // ];

  // const [stateName, setStateName] = useState("");
  // const [cityName, setCityName] = useState("");
  // const [indianStates, setIndianStates] = useState([]);
  // const [indianCities, setIndianCities] = useState([]);
  // const [selectedState, setSelectedState] = useState("");

  // const navigate = useNavigate();

  // const handleStateSubmit = (state) => {
  //   console.log(state.value, "selected");
  //   localStorage.setItem("state", state.value);
  //   setSelectedState(state.value);
  // };

  // const fetchData = async () => {
  //   try {
  //     const { states, cities } = await fetchStatesAndCities();
  //     setIndianStates(states);
  //     setIndianCities(cities);
  //   } catch (error) {
  //     console.error("Error fetching Indian states and cities:", error);
  //   }
  // };

  // const handleCitySubmit = (city) => {
  //   console.log(city, "selected");
  //   localStorage.setItem("city", city);
  //   setCityName(city);
  //   fetchData();
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const currentState = localStorage.getItem("state");
  //   setStateName(currentState);
  //   setSelectedState(currentState);

  //   const currentCity = localStorage.getItem("city");
  //   if (currentCity !== undefined && currentCity !== null) {
  //     setCityName(currentCity);
  //   }
  // }, [selectedState]);

  // const filteredCities = indianCities[selectedState] || [];

  const handleWhoWeAre = () => {
    navigate("/who-we-are");
  };

  const handleWorkWithUs = () => {
    navigate("/work-with-us");
  };

  const handleHomeView = () => {
    navigate("/");
  };


  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [indianStates, setIndianStates] = useState([]);
  const [indianCities, setIndianCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const { state, city, setCityAndState } = useStateAndCity();
  const [dummy, setDummy] = useState(false);

  console.log(state, isEmpty(city), "aakbjhwqgefheug");

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


  return (
    <div>
      <div className="relative w-full h-[775px] bg-gray-50">
        <img
          style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)" }}
          className="w-full h-[700px]  object-cover"
          alt="Rectangle"
          src={Partners1}
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="w-full top-0 left-0 space-y-4">
            <div className="text-center [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#eeeeee] text-[80px] tracking-[0] leading-[normal]">
              Partners Restuarants
            </div>
            <p className="ml-[290px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
              An unforgettable dining experience awaits in the heart of
              locations
            </p>
          </div>

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
                        // onChange={() => {
                        //   handleStateSubmit(state);
                        // }}
                        value={state}
                        onChange={(e) => {
                          handleStateSubmit(e);
                        }}
                        className="w-full text-center py-1 bg-transparent appearance-none focus:outline-none px-1"
                      >
                         <option
                          value={"Select city"}
                          className={`${
                            isEmpty(state) && dummy ? "block" : "hidden"
                          }`}
                        >
                          Select your state
                        </option>
                         {/* <option value="">
                          {stateName === "" || stateName === undefined
                            ? "Select your state"
                            : stateName}
                        </option> */}

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
                        {/* <option value="">
                          {cityName != undefined
                            ? cityName
                            : "Select your city"}
                        </option>
                        {filteredCities.map((city, index) => (  
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))} */}
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
                <button onClick={handleWhoWeAre}>Who we are</button>
                <button onClick={handleWorkWithUs}>Work with us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
