import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface ItemProps {
  title: string;
  description: string;
  logo: StaticImageData;
  imageAlt: string;
}

const ListItems = ({ title, description, logo, imageAlt }: ItemProps) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="bg-[#F1F5F9] rounded-xl p-4 flex-shrink-0">
        <Image src={logo} alt={imageAlt} className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-manrope font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ListItems;
