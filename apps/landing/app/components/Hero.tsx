import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import security from "../../public/secure.png";

const Hero = () => {
  return (
    <div>
      <Navbar />

      {/**First Part */}
      <div>
        <div className="flex gap-2 bg-[#E9E9E9] justify-center w-fit mx-auto items-center px-2 py-1 rounded-4xl mt-10">
          <span className="bg-white p-1 rounded-4xl">
            <Image width={16} src={security} alt="secure lending" />
          </span>
          <p className="text-sm">Smart Finance, Smart Living</p>
        </div>

        {/**Header */}
        <div className="flex justify-center mt-4">
          <h1 className="text-center text-5xl max-w-2xl leading-14">
            Revolutionizing Finance for a Better Tomorrow, Today
          </h1>
        </div>

        <div >
          <p>
            Fintech services leverage technology to enhance financial processes,
            offering innovative solutions for banking
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
