"use client";
import Image from "next/image";
import React, { useState } from "react";
import Vector from "../../public/Vector.png";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

const Menu = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed h-full bg-[#171717] right-0 top-0 w-72 sm:w-80 shadow-2xl border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-4 sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center pb-8 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <span className="bg-[#D1F701] text-black px-3 py-1 rounded-lg font-bold text-lg">
                P
              </span>
              <span className="text-xl font-semibold text-gray-100">
                PeerCash
              </span>
            </div>
            <div
              onClick={onClose}
              className="hover:cursor-pointer  p-2 rounded-lg transition-colors"
            >
              <RxCross1 className="text-gray-400 hover:text-white" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 pt-8">
            <ul className="space-y-6 text-white">
              <li
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
              >
                <Link
                  className="block py-3 px-4 rounded-lg hover:text-[#D1F701] hover:bg-[#292929] transition-all duration-200 font-medium"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
              >
                <Link
                  className="block py-3 px-4 rounded-lg hover:text-[#D1F701] hover:bg-[#292929] transition-all duration-200 font-medium"
                  href="about-us"
                >
                  Services
                </Link>
              </li>
              <li
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "250ms" : "0ms" }}
              >
                <Link
                  className="block py-3 px-4 rounded-lg hover:text-[#D1F701] hover:bg-[#292929] transition-all duration-200 font-medium"
                  href="pricing"
                >
                  Pricing
                </Link>
              </li>
              <li
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
              >
                <Link
                  className="block py-3 px-4 rounded-lg hover:text-[#D1F701] hover:bg-[#292929] transition-all duration-200 font-medium"
                  href="contact-us"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Download Button - Always at bottom */}
          <div
            className={`pt-6 border-t border-gray-800 transform transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "350ms" : "0ms" }}
          >
            <Link
              className="block w-full text-center text-black bg-[#D1F701] font-semibold px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-4xl hover:bg-[#b8d401] hover:scale-[1.02] transition-all duration-200 shadow-lg"
              href="login"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <div
        onClick={handleToggle}
        className="bg-[#D1F701] rounded-full p-4 hover:cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        <Image src={Vector} alt="Vector art" />
      </div>
      <Menu onClose={handleClose} isOpen={open} />
    </div>
  );
};
export default Sidebar;
