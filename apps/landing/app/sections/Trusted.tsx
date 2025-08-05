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
    <div className="">
      <p className="text-center mt-15 ">
        Trusted by Over 5,500+ Industry Leaders
      </p>
      <div>
        <div className="flex justify-center gap-4 md:gap-8">
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={google}
            alt="google-logo"
          />
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={siemens}
            alt="siemens-logo"
          />
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={microsoft}
            alt="microsoft-logo"
          />
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={slack}
            alt="slack-logo"
          />
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={tesla}
            alt="tesla-logo"
          />
        </div>
        <div className="flex justify-center gap-4 md:gap-8 relative bottom-4 md:bottom-8">
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={walmart}
            alt="walmart-logo"
          />
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={adobe}
            alt="adobe-logo"
          />
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={framer}
            alt="framer-logo"
          />
          <Image
            className="w-16 h-16 md:w-[90px] md:h-[90px]"
            src={openai}
            alt="openai-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
