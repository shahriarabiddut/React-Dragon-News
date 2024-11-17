import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h1 className="text-2xl font-bold text-white">Dragon News</h1>
            <p className="mt-2 text-sm text-gray-400">
              Your trusted source for the latest and most reliable news from around the world.
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Dragon News. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
