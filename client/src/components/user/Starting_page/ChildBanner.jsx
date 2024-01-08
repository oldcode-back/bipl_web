import React from "react";
import { Map, coll1, coll2, coll3 } from "../../../assets/images";
import { Link } from "react-router-dom";

const ChildBanner = () => {
  return (
    <div>
      <div className="w-full h-[100px] pt-20 mb-28">
        <p className="text-center font-bold text-[#323232] text-5xl leading-normal">
          Collections
        </p>
        <div className="text-center py-4 top-0 left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#646464] text-[30px] tracking-[0] leading-[normal]">
          Our Restaurant Showcase
        </div>
      </div>
      <div className="w-full h-[700px] relative flex justify-center items-center">
        <div className=" h-[600px] relative">
          <img className="w-full h-full object-cover" alt="Map" src={Map} />
          <Link
            to="/must-visit-here"
            className="absolute w-[300px] h-[360px] top-[5px] left-[-50px] object-cover"
          >
            {/* <div className="absolute w-[300px] h-[360px] top-[5px] left-[-50px] object-cover "> */}
            <img className="w-full object-cover" alt="Image" src={coll3} />
            <div className="absolute w-[300px] rounded-2xl  h-[360px] bottom-[-4px] left-0 rounded-[0px 0px 21px 20px] shadow-[0px 4px 4px #00000040] [background:linear-gradient(180deg,rgba(0,0,0,0)_45.94%,rgb(0,0,0)_100%)]" />
            <div className="absolute bottom-3 left-3 text-white font-semibold text-[22px] tracking-[0] leading-[normal]">
              Must visit <br /> Restaurants
            </div>
            {/* </div> */}
          </Link>
          <Link
            to="/partner-restaurants"
            className="absolute w-[350px] h-[410px] top-[185px] left-[400px] object-cover"
          >
            {/* <div className="absolute w-[350px] h-[410px] top-[185px] left-[400px] object-cover"> */}
            <img className="w-full object-cover" alt="Image" src={coll1} />
            <div className="absolute w-[350px] h-[410px] rounded-2xl bottom-[-14px] left-0 rounded-[0px 0px 21px 20px] shadow-[0px 4px 4px #00000040] [background:linear-gradient(180deg,rgba(0,0,0,0)_45.94%,rgb(0,0,0)_100%)]" />
            <div className="absolute bottom-1 left-3 text-white font-semibold text-[22px] tracking-[0] leading-[normal]">
              Partner <br /> Restaurants
            </div>
            {/* </div> */}
          </Link>

          <Link
            to="/upcoming-restaurants"
            className="absolute w-[300px] h-[360px] top-[5px] left-[900px]  object-cover"
          >
            {/* <div className="absolute w-[300px] h-[360px] top-[5px] left-[900px]  object-cover"> */}
            <img className="w-full object-cover" alt="Image" src={coll2} />
            <div className="absolute w-[300px] rounded-2xl  h-[360px] bottom-[-4px] left-0 rounded-[0px 0px 21px 20px] shadow-[0px 4px 4px #00000040] [background:linear-gradient(180deg,rgba(0,0,0,0)_45.94%,rgb(0,0,0)_100%)]" />
            <div className="absolute bottom-3 left-3 text-white font-semibold text-[22px] tracking-[0] leading-[normal]">
              Upcoming <br /> Restaurants
            </div>
            {/* </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChildBanner;
