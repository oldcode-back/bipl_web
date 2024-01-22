import React, { useEffect, useState } from "react";
import { BromagLogo, India } from "../../../assets/images";
import { MdLocationPin, MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { fetchStatesAndCities } from "../../../utils/fetchStateAndCities";
import { useStateAndCity } from "../../../utils/StateAndCityContext";
import { isEmpty } from "lodash";

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
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[200px] z-10">
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
      </div>
    </>
  );
};

export default Navbar;
