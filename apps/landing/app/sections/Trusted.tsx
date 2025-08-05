import Image from "next/image";
import React from "react";
import google from "../../public/google.png";
import siemens from "../../public/siemens.png";
import microsoft from "../../public/microsoft.png";
import slack from "../../public/slack.png";
import tesla from "../../public/tesla.png";
import walmart from "../../public/walmart.png";
import adobe from "../../public/adobe.png";
import framer from "../../public/Framer.png";
import openai from "../../public/OpenAI.png";

const Trusted = () => {
  return (
    <div className="py-8 sm:py-12 px-4">
      <p className="text-center text-sm sm:text-base mb-8 sm:mb-12 text-gray-600">
        Trusted by Over 5,500+ Industry Leaders
      </p>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8">
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={google}
            alt="google-logo"
          />
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={siemens}
            alt="siemens-logo"
          />
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={microsoft}
            alt="microsoft-logo"
          />
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={slack}
            alt="slack-logo"
          />
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={tesla}
            alt="tesla-logo"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={walmart}
            alt="walmart-logo"
          />
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={adobe}
            alt="adobe-logo"
          />
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={framer}
            alt="framer-logo"
          />
          <Image
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
            src={openai}
            alt="openai-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
