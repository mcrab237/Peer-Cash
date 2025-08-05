import Image from "next/image";
import React from "react";
import iphone from "../../public/iphone2.png";
import ListItems from "../components/ListItems";
import bank from "../..//public/bank.png";
import locator from "../..//public/locate.png";
import support from "../..//public/support.png";

const SpendingSections = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl font-manrope lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Start Sending Your Money
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-12 leading-relaxed max-w-md">
              Integrating advanced technologies, fintech reshapes the financial
              landscape, making it more user-friendly and adaptive to modern
              needs.
            </p>

            <div className="space-y-6">
              <ListItems
                title="First of all create an account"
                description="Create an account using your email address or social media profile. Quick and straightforward registration process."
                imageAlt="bank icon"
                logo={bank}
              />
              <ListItems
                title="Track Transactions in Real-Time"
                description="Monitor the status of your transactions with instant updates and notifications."
                imageAlt="location tracker icon"
                logo={locator}
              />
              <ListItems
                title="Access 24/7 Customer Support"
                description="Get assistance anytime with our dedicated support team ready to help with any issues or questions."
                imageAlt="support icon"
                logo={support}
              />
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <Image
                className="w-full h-auto object-contain"
                src={iphone}
                alt="PeerCash mobile app interface showing wallet balance and quick actions"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingSections;
