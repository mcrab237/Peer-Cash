import React from "react";
import DownloadButton from "../components/DownloadButton";
import googlePlayIcon from "../../public/playstore.png";
import appleIcon from "../../public/appleicon.png";
import pattern from "../../public/pattern.png";

const Footer = () => {
  return (
    <div className="relative">
      {/**Background div that takes 80% space from bottom to top and renders below others */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#f0f0f2] h-4/5 w-full z-0 sm:h-2/3 md:h-2/3 lg:h-2/3"></div>
      {/**Footer Elements */}
      <footer className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/**Download Section */}
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto  bg-[#171717] rounded-3xl">
            <div
              className=" px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 text-center relative"
              style={{
                backgroundImage: `url(${pattern.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-white font-manrope text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Download Our App Free and Enjoy Exclusive Features!
                </h2>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-2xl leading-tight mx-auto">
                  Enjoy seamless navigation, exclusive content, and personalized
                  experiences right at your fingertips. Don&apos;t miss out on
                  this opportunity to enhance your daily routine with our
                  user-friendly, free mobile app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <DownloadButton
                    store="Google Play"
                    image={googlePlayIcon}
                    firstText="GET IT ON"
                  />
                  <DownloadButton
                    store="App Store"
                    image={appleIcon}
                    firstText="Download on the"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/**Brand and Subscribe Section */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#D1F701] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-manrope font-bold text-gray-900">
                  PeerCash
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-manrope font-semibold text-gray-900 mb-3">
                  Subscribe
                </h3>
                <p className="text-gray-600 mb-4 max-w-sm">
                  Join our newsletter to stay up to date on features and
                  releases.
                </p>
                <div className="flex gap-2 bg-white w-100 px-3 py-1 rounded-4xl">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-black text-white rounded-4xl hover:bg-gray-800 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  By subscribing you agree to with our{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>

            {/**Quick Links */}
            <div>
              <h3 className="text-lg font-semibold manrope text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/**Products */}
            <div>
              <h3 className="text-lg font-manrope font-semibold text-gray-900 mb-4">
                Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    AI Assistant
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Mobile App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Credit Card
                  </a>
                </li>
              </ul>
            </div>

            {/**Company */}
            <div>
              <h3 className="text-lg font-semibold font-manrope text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/**Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              Copyright © 2024 Investo. All Rights Reserved
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
