import React from "react";
import {
  WhoWeAre4,
  WhoWeAre3,
  WhoWeAre2,
  WhoWeAreCard1,
  Abrar,
  WhoWeAreCard3,
  WhoWeAreCard4,
} from "../../../assets/images";

const WhoSection = () => {
  return (
    <div className="w-full">
      <div className=" bg-white mb-44 pr-32 pl-40">
        {/*  <div className="h-[600px] w-full bg-white flex justify-center items-center mb-44 pt-20"> */}
        <div className="flex ">
          <div className="flex flex-col w-[900px] -ml-6">
            <div className="w-full ml-32 text-center pt-16 pb-12 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#323232] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              BROMAG – The Ultimate Solution for Restaurants
            </div>
            <div className=" m-8 w-[800px]">
              <div className="w-[750px] flex justify-center [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#323232] text-[30px] tracking-[0] leading-[normal]">
                Who We Are ?
              </div>
              <p className=" w-[769px] mt-16 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#484848] text-[28px] tracking-[0] leading-[normal]">
                Meet The Visionary
                <br />
                Duo Behind BROMAG – Goree Mohammed Abrar And Goree Mohammed
                Aslam!
              </p>
              <p className=" w-[784px] mt-4 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#484848] text-[28px] tracking-[0] leading-[normal]">
                BROMAG India is driven by the passion and dedication
                <br />
                of its dynamic leaders, Goree Mohammed Abrar and
                <br /> Goree Mohammed Aslam. As the founders and <br />{" "}
                directors of this culinary empire, they bring not only <br />
                business acumen but an unwavering commitment to revolutionize
                the food delivery experience.
              </p>
            </div>
          </div>
          <div className="w-[500px] mt-80 h-[282px]">
            <img
              className=" w-[277px] h-[282px]  object-cover"
              alt="Image"
              src={WhoWeAreCard1}
            />
          </div>
        </div>
        <div className="flex mt-24 ">
          <div className="w-[500px] h-[282px]">
            <img
              className=" w-[277px] h-[282px]  object-cover"
              alt="Image"
              src={Abrar}
            />
          </div>
          <div className="flex flex-col w-[800px] mt-4">
            <div className=" m-8 w-[900px]">
              <p className="w-[784px] top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-normal text-[#484848] text-[27px] tracking-[0] leading-[normal]">
                <span className="font-semibold">Goree Mohammed Abrar</span>
                <span className="[font-family:'Montserrat-Regular',Helvetica]">
                  , the ingenious mind behind <br /> BROMAG, is fueled by an
                  insatiable love for exceptional <br /> cuisine and a desire to
                  redefine convenience in dining. With <br /> a keen eye for
                  innovation, Abrar spearheads the strategic <br /> direction of
                  BROMAG, ensuring that every aspect of the <br /> business
                  exceeds the expectations of customers.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-24 ">
          <div className="flex flex-col w-[800px] mt-4">
            <div className=" m-8 w-[900px]">
              <p className="w-[784px] top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#484848] text-[27px] tracking-[0] leading-[normal]">
                <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#484848] text-[27px] tracking-[0]">
                  Complementing this vision is{" "}
                </span>
                <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold">
                  Goree Mohammed Aslam,
                </span>
                <br />
                <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#484848] text-[27px] tracking-[0]">
                  the driving force behind the operational excellence of <br />
                  BROMAG. His expertise lies in seamlessly translating ideas{" "}
                  <br />
                  into reality, creating a robust infrastructure that enables{" "}
                  <br />
                  BROMAG to deliver not just meals but delightful <br />{" "}
                  experiences to doorsteps nationwide.
                </span>
              </p>
            </div>
          </div>
          <div className="w-[500px] h-[282px] ml-20">
            <img
              className=" w-[277px] h-[282px]  object-cover"
              alt="Image"
              src={WhoWeAreCard3}
            />
          </div>
        </div>
        <div className="flex mt-24 ">
          <div className="w-[500px] h-[282px]">
            <img
              className=" w-[277px] h-[282px]  object-cover"
              alt="Image"
              src={WhoWeAreCard4}
            />
          </div>
          <div className="flex flex-col w-[800px] -mt-2">
            <div className=" m-8 w-[900px]">
              <p className="w-[784px]  top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-normal text-[#484848] text-[27px] tracking-[0] leading-[normal]">
                <span className="font-semibold">
                  Together, Abrar and Aslam embody the spirit of BROMAG,
                  <br />
                </span>
                <span className="[font-family:'Montserrat-Regular',Helvetica]">
                  where culinary passion meets logistical brilliance. Their <br />
                  commitment to quality, innovation, and customer <br /> satisfaction
                  propels BROMAG forward, setting new <br /> standards in the food
                  delivery landscape. Join us on this <br /> gastronomic journey
                  curated by the dynamic duo as they <br /> continue to make BROMAG the
                  epitome of culinary <br /> convenience and excellence!
                  <br />
                  <br />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col ml-[-330px]">
        <div className="text-center pt-16 pb-12 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#323232] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Who We Are
        </div>
        <div className=" m-8">
          <p className=" w-[708px] top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#484848] text-[27px] tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
            <br />
            Duis aute irure dolor in reprehenderit in voluptate
          </p>
        </div>
      </div>

      <div class="grid ml-20 ">
        <div className="w-[277px] h-[282px]">
          <img
            className=" w-[277px] h-[282px] top-0 left-0 object-cover"
            alt="Image"
            src={WhoWeAre3}
          />
        </div>

        <div className="w-[216px] h-[220px] absolute mx-48 mt-44">
          <img
            className=" w-[216px] h-[220px] top-0 left-0 object-cover rounded-2xl"
            alt="Image"
            src={WhoWeAre4}
          />
        </div>
        <div className="w-[163px] h-[166px] mt-16 ml-[350px] absolute">
          <img
            className=" w-[163px] h-[166px] top-0 left-0 object-cover"
            alt="Image"
            src={WhoWeAre2}
          />
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default WhoSection;
