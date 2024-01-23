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
import '../../../css/footer.css'

const Footer = () => {
  return (
    <div className="footer-container bg-black  ">
      <div className=" flex justify-between pt-8">
        <div className="">
          <div className=" footer-bromag ">
            <img src={Bromag} alt="bromag" />
          </div>
          <h3 className="footer-social  font-medium text-gray-200 mb-6  top-0 left-0 opacity-40">
            Social Links
          </h3>
          {/* 
          <img  
            className=" w-[88px] ml-10 mb-6 h-[23px] top-0 left-0"
            alt="Social"
            src={Social}
          /> */}
          <br />
          <div className="footer-icons  flex justify-evenly ">
            <a
              href="https://www.instagram.com/bromagweb?utm_source=qr&igsh=MTRubjd2cWw0bHpqdw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-insta  top-0 left-0 object-cover"
                alt="Instagram"
                src={Instagram}
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-facebook  top-0 left-0 object-cover"
                alt="Facebook"
                src={Facebook}
              />
            </a>

            <a
              href="https://wa.me/916382056505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-whatsapp  top-0 left-0 object-cover"
                alt="Whatsapp"
                src={Whatsapp}
              />
            </a>

            <a
              href="https://www.youtube.com/@BROMAGINDIA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-youtube top-0 left-0 object-cover"
                alt="youtube"
                src={youtube}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/bromagindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon-linkedin  top-0 left-0 object-cover"
                alt="LinkedIn"
                src={LinkedIn}
              />
            </a>
          </div>
        </div>
        <div className="footer-contactus w-[407px] h-[46px]">
          <div className="footer-contacth  left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-neutral-100  tracking-[3.00px] leading-[normal] whitespace-nowrap">
            CONTACT US
          </div>
          <div className="w-[37px] h-[3px]">
            <div className="footer-contacth-line  w-[37px] h-[3px] top-0 left-0 rounded-[1.5px] [background:linear-gradient(180deg,rgb(195.91,117.55,0)_0%,rgba(255,255,255,0)_100%)]" />
          </div>
          <div className="contact-content w-[233px] pt-10 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e4e4e4] text-[25px] tracking-[0] leading-[normal]">
            <div className="flex text-center space-x-3">
              <img
                className="footer-phone-icon  top-0 left-0"
                alt="Vector"
                src={Phone}
              />
              <p className="footer-phone-num">+91 9150289762</p>
            </div>
          </div>
          <div className="mail-content w-[233px] pt-6 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e4e4e4] text-[25px] tracking-[0] leading-[normal]">
            <div className="flex text-center space-x-3">
              <img
                className="footer-mail-icon  top-0 left-0"
                alt="Vector"
                src={Email}
              />
              <p className="footer-mail-id">mag@bromagindia.com</p>
            </div>
          </div>{" "}
          <div className="address-content w-[407px] pt-6 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e4e4e4] text-[25px] tracking-[0] leading-[normal]">
            <div className="flex text-center space-x-3">
              <img
                className="footer-location-icon top-0 left-0"
                alt="Vector"
                src={Location}
              />
              <p className="footer-address">Chennai, Tamilnadu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
