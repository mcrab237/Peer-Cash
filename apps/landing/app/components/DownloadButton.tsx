import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface ButtonProps {
  store: string;
  image: StaticImageData;
  firstText: string;
}

const DownloadButton = ({ store, image, firstText }: ButtonProps) => {
  return (
    <div className="bg-white rounded-4xl px-4 py-1 sm:px-4 sm:py-1 flex items-center gap-3 min-w-[140px] sm:min-w-[160px] cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg">
      <Image
        src={image}
        alt={store}
        width={24}
        height={24}
        className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
      />
      <div className="flex flex-col items-start">
        <span className="text-gray-600 text-xs sm:text-sm leading-tight">
          {firstText}
        </span>
        <span className="text-black text-sm sm:text-base font-semibold leading-tight">
          {store}
        </span>
      </div>
    </div>
  );
};

export default DownloadButton;
