import React from "react";
import { MdDone } from "react-icons/md";
import Image from "next/image";
import image from "../../public/world_view.png";

const TransformationSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* World image*/}
          <div className="order-1 lg:order-2">
            <Image src={image} alt="world image" />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="font-bold font-manrope text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Smooth and Easy International Transfers.{" "}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              With user-friendly features, competitive exchange rates, and
              robust security measures, our platform simplifies international
              transactions.
            </p>

            {/* Track Transfers and Instant Transactions */}
            <div className="space-y-4 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#F6F7F9] rounded-4xl p-1">
                  <MdDone />
                </div>
                <span className="text-gray-700 font-medium">
                  Seamless international money transfers.{" "}
                </span>
              </div>

              <div className="flex items-center gap-3 ">
                <div className="bg-[#F6F7F9] rounded-4xl p-1">
                  <MdDone />
                </div>

                <span className="text-gray-700 font-medium">
                  Competitive exchange rates offered daily.{" "}
                </span>
              </div>
            </div>

            <button className="bg-[#171717] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationSection;
