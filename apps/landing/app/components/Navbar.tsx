import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center rounded-full bg-[#171717] px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="bg-[#D1F701] px-2 rounded-md font-bold text-center">
          P
        </span>
        <span className="text-xl font-semibold text-gray-100">PeerCash</span>
      </div>

      <div className="max-md:hidden flex items-center text-amber-50 gap-8">
        <Link className="hover:text-[#D1F701] transition-colors" href="/">
          Home
        </Link>
        <Link
          className="hover:text-[#D1F701] transition-colors"
          href="about-us"
        >
          Services
        </Link>

        <Link className="hover:text-[#D1F701] transition-colors" href="pricing">
          Pricing
        </Link>
        <Link
          className="hover:text-[#D1F701] transition-colors"
          href="contact-us"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link
          className="max-md:hidden text-black bg-[#D1F701] font-semibold px-6 py-2 rounded-4xl hover:bg-gray-100 transition-colors"
          href="login"
        >
          Download App
        </Link>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
