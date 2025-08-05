import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import security from "../../public/secure.png";
import iphone from "../../public/iPhone.png";
import frame1 from "../../public/Frame104.png";
import frame2 from "../../public/Frame57.png";
import frame3 from "../../public/Frame60.png";
import frame4 from "../../public/Frame103.png";
import frame5 from "../../public/Frame2.png";
import bgImage from "../../public/bg.png";

import Button from "../components/Button";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundColor: "#F3F3F5",
      }}
    >
      <Navbar />

      {/**First Part */}
      <div className="animate-fadeInUp">
        <div className="flex gap-2 bg-[#E9E9E9] justify-center w-fit mx-auto items-center px-2 py-1 rounded-4xl mt-10 animate-fadeInUp [animation-delay:200ms]">
          <span className="bg-white p-1 rounded-4xl">
            <Image width={16} src={security} alt="secure lending" />
          </span>
          <p className="text-sm">Smart Finance, Smart Living</p>
        </div>

        {/**Header */}
        <div className="flex justify-center mt-4 px-4">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight sm:leading-snug md:leading-14 font-manrope font-bold animate-fadeInUp [animation-delay:400ms]">
            Revolutionizing Finance for a Better Tomorrow, Today
          </h1>
        </div>

        <div className="flex justify-center mt-4 px-4">
          <p className="text-center text-sm sm:text-base max-w-sm sm:max-w-md font-inter animate-fadeInUp [animation-delay:600ms]">
            Fintech services leverage technology to enhance financial processes,
            offering innovative solutions for banking
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center my-6 gap-3 sm:gap-4 mb-12 px-4 animate-fadeInUp [animation-delay:800ms]">
          <Button text="Get Started" textColor="#000" color="#D1F701" />
          <Button text="Request a demo" textColor="#fff" color="#5945FD" />
        </div>
      </div>

      <div className="relative flex justify-center overflow-hidden px-4 animate-fadeInUp [animation-delay:1000ms]">
        {/* Container for all images with relative positioning */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="animate-scaleIn [animation-delay:1200ms] flex justify-center">
            <Image
              src={iphone}
              alt="iphone image"
              className="w-full h-auto max-w-[280px] sm:max-w-[320px] md:max-w-[380px]"
            />
          </div>

          {/* Left floating elements - Hidden on mobile, visible on larger screens */}
          <div className="absolute left-[-60px] sm:left-[-80px] md:left-[-120px] top-[20%] space-y-2 sm:space-y-4 hidden sm:block">
            <div className="animate-slideInLeft [animation-delay:1400ms]">
              <Image
                src={frame1}
                alt="percentage amount"
                className="block relative right-4 sm:right-8 md:right-20 lg:right-30 bottom-6 sm:bottom-10 md:bottom-15 transition-all w-16 sm:w-20 md:w-auto"
              />
            </div>
            <div className="animate-slideInLeft [animation-delay:1600ms]">
              <Image
                src={frame2}
                alt="total income"
                className="block relative right-2 sm:right-6 md:right-16 lg:right-24 bottom-12 sm:bottom-20 md:bottom-28 transition-all w-20 sm:w-24 md:w-auto"
              />
            </div>
          </div>

          {/* Right floating elements - Hidden on mobile, visible on larger screens */}
          <div className="absolute right-[-60px] sm:right-[-80px] md:right-[-120px] top-[10%] space-y-2 sm:space-y-4 hidden sm:block">
            <div className="animate-slideInRight [animation-delay:1400ms]">
              <Image
                src={frame3}
                alt="total income 2"
                className="block relative left-8 sm:left-16 md:left-24 lg:left-36 w-20 sm:w-24 md:w-auto"
              />
            </div>
            <div className="animate-slideInRight [animation-delay:1800ms]">
              <Image
                src={frame4}
                alt="people concente"
                className="block relative left-6 sm:left-10 md:left-15 lg:left-25 bottom-2 sm:bottom-3 md:bottom-5 transition-all w-16 sm:w-20 md:w-auto"
              />
            </div>
            <div className="animate-slideInRight [animation-delay:2000ms]">
              <Image
                src={frame5}
                alt="arrow up"
                className="block relative left-16 sm:left-32 md:left-48 lg:left-80 bottom-6 sm:bottom-8 md:bottom-12 w-12 sm:w-16 md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
