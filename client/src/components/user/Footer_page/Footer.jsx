import React from "react";
import {
  BromagLogo,
  Location,
  Email,
  Phone,
  Bromag,
  Instagram,
  Facebook,
  Whatsapp,
  LinkedIn,
  Social,
  youtube,
} from "../../../assets/images";

const Footer = () => {
  return (
    <div className="bg-black h-[450px] ">
      <div className="flex justify-between pt-8">
        <div className="">
          <div className="w-[969px]  ">
            <img src={Bromag} alt="bromag" />
          </div>
          <img
            className=" w-[88px] ml-10 mb-6 h-[23px] top-0 left-0"
            alt="Social"
            src={Social}
          />
          <br />
          <div className="ml-4 flex justify-evenly w-[300px]">
            <img
              className=" w-[32px] h-[32px] top-0 left-0 object-cover"
              alt="Instagram"
              src={Instagram}
            />
            <img
              className=" w-[40px] h-[40px] top-0 left-0 object-cover"
              alt="Facebook"
              src={Facebook}
            />
            <img
              className=" w-[32px] h-[32px] top-0 left-0 object-cover"
              alt="Whatsapp"
              src={Whatsapp}
            />
            <img
              className=" w-[40px] h-[40px] top-0 left-0 object-cover"
              alt="youtube"
              src={youtube}
            />
            <img
              className=" w-[32px] h-[32px] top-0 left-0 object-cover"
              alt="LinkedIn"
              src={LinkedIn}
            />
          </div>
        </div>
        <div className="w-[407px] h-[46px]">
          <div className=" w-[234px] mt-8 left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-neutral-100 text-[30px] tracking-[3.00px] leading-[normal] whitespace-nowrap">
            CONTACT US
          </div>
          <div className="w-[37px] h-[3px]">
            <div className=" w-[37px] h-[3px] top-0 left-0 rounded-[1.5px] [background:linear-gradient(180deg,rgb(195.91,117.55,0)_0%,rgba(255,255,255,0)_100%)]" />
          </div>
          <div className=" w-[233px] pt-10 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e4e4e4] text-[25px] tracking-[0] leading-[normal]">
            <div className="flex text-center space-x-3">
              <img
                className=" w-[22px] h-[24px] top-0 left-0"
                alt="Vector"
                src={Phone}
              />
              <p>+91 9150289762</p>
            </div>
          </div>
          <div className=" w-[233px] pt-6 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e4e4e4] text-[25px] tracking-[0] leading-[normal]">
            <div className="flex text-center space-x-3">
              <img
                className=" w-[22px] h-[24px] top-0 left-0"
                alt="Vector"
                src={Email}
              />
              <p>mag@bromagindia.com</p>
            </div>
          </div>{" "}
          <div className="w-[407px] pt-6 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e4e4e4] text-[25px] tracking-[0] leading-[normal]">
            <div className="flex text-center space-x-3">
              <img
                className=" w-[22px] h-[24px] top-0 left-0"
                alt="Vector"
                src={Location}
              />
              <p>Chennai, Velachery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
