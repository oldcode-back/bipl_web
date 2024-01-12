import React, { useEffect, useState } from "react";
import {
  Must2,
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
  restaurant5,
  restaurant6,
  restaurant7,
} from "../../../assets/images";
import axios from "axios";
import { BackendAPI } from "../../../config/backendPoint";
import { useStateAndCity } from "../../../utils/StateAndCityContext";

const Partner_cards = ({ name, image, location, rate, link }) => {
  return (
    <div className="mb-8">
      {" "}
      <div className="w-64 h-48 bg-white rounded-2xl shadow-md">
        <div className="flex justify-center items-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
            className="w-60 h-32 object-cover rounded-2xl pt-2 "
            alt="Image"
            src={image}
          />
        </a>
         
        </div>
        <div className="px-3 py-2 space-y-1">
          <div className="flex justify-between">
            <div className="font-semibold text-black text-lg mt-[-7px]">
              {name}{" "}
            </div>
          </div>

          <div className="font-medium text-gray-600 text-sm">{location}</div>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const [PartnersData, setPartnersData] = useState([]);

  const { state, city, loading } = useStateAndCity();

  useEffect(() => {
    const handlePartnersData = async () => {
      try {
        const response = await axios.get(`${BackendAPI}partnersData`, {
          params: {
            state: state,
            city: city,
          },
        });
        if (response.data.success) {
          setPartnersData(response.data.PartnersData);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      handlePartnersData();
    }
  }, [state, city, loading]);
  return (
    <div className="bg-gray-50 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-44 mr-32 ">
        {PartnersData.map((restaurant, index) => (
          <Partner_cards
            key={index}
            name={restaurant.restaurant}
            image={restaurant.restaurantPic}
            location={restaurant.location}
            rate={restaurant.rate}
            link={restaurant.link}
          />
        ))}
      </div>
    </div>
  );
};
const YourComponent = () => {
  const restaurantData = [
    {
      name: "Restaurant 1",
      image: Must2,
      location: "Location 1",
      rate: 4.3,
    },
    {
      name: "Restaurant 2",
      image: restaurant1,
      location: "Location 2",
      rate: 5,
    },
    {
      name: "Restaurant 3",
      image: restaurant2,
      location: "Location 3",
      rate: 4.5,
    },
    {
      name: "Restaurant 4",
      image: restaurant3,
      location: "Location 4",
      rate: 3.6,
    },
    {
      name: "Restaurant 5",
      image: restaurant4,
      location: "Location 5",
      rate: 5,
    },
    {
      name: "Restaurant 6",
      image: restaurant5,
      location: "Location 6",
      rate: 5,
    },
    {
      name: "Restaurant 7",
      image: restaurant6,
      location: "Location 7",
      rate: 4.6,
    },
    {
      name: "Restaurant 8",
      image: restaurant7,
      location: "Location 8",
      rate: 4,
    },
  ];

  return <CardGrid restaurants={restaurantData} />;
};

export default YourComponent;
