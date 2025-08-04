import Image, { StaticImageData } from "next/image";
import React from "react";

interface MetricsProps {
  image: StaticImageData;
  number: string;
  description: string;
  alt: string;
}

const MetricsItem = ({ image, number, description, alt }: MetricsProps) => {
  return (
    <div className="px-12 py-10">
      <div className="flex justify-center items-center gap-3">
        {/**Upper Section */}
        <div>
          <Image src={image} alt={alt} />
        </div>
        <h2 className="font-bold text-3xl">{number}</h2>
      </div>
      <div>
        <p className="md:max-w-xs mt-4 text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};
export default MetricsItem;
