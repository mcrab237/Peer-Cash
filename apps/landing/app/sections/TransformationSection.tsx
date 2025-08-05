import React from "react";
import Transactions from "../components/Transactions";
import amazonlogo from "../../public/amazon.png";
import uberLogo from "../../public/uber.png";
import paypalLogo from "../../public/paypal.png";
import { MdDone } from "react-icons/md";

const TransformationSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Transaction List */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#F0F0F2] p-6 sm:p-8 rounded-2xl max-w-md mx-auto lg:mx-0">
              <Transactions
                logo={amazonlogo}
                company="Amazon"
                summary="Online Shopping"
                alt="Amazon Logo"
                currency="$"
                amount={150.0}
              />
              <Transactions
                logo={uberLogo}
                company="Uber"
                summary="Taxi Services"
                alt="Uber Logo"
                currency="$"
                amount={55.0}
              />
              <Transactions
                logo={paypalLogo}
                company="Paypal"
                summary="Money Transfer"
                alt="Paypal Logo"
                currency="$"
                amount={320.0}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-manrope text-gray-900 leading-tight mb-6">
              Transforming Transactions, One Click at a Time.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Our service is designed to connect the world, offering reliable
              and accessible financial solutions to everyone, everywhere.
            </p>

            {/* Track Transfers and Instant Transactions */}
            <div className="space-y-4 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#F6F7F9] rounded-4xl p-1">
                  <MdDone />
                </div>
                <span className="text-gray-700 font-medium">
                  Track transfers with real-time notifications.{" "}
                </span>
              </div>

              <div className="flex items-center gap-3 ">
                <div className="bg-[#F6F7F9] rounded-4xl p-1">
                  <MdDone />
                </div>

                <span className="text-gray-700 font-medium">
                  Instant transactions, real-time updates.{" "}
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
