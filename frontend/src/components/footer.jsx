import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Brand and Quick Links */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-blue-500 mb-2">
              QuickSell
            </div>
            <p className="text-gray-400">
              Your go-to platform for buying and selling with ease.
            </p>
          </div>

          {/* Center Section: Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/homepage" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-blue-500">
                  Sell
                </Link>
              </li>
              <li>
                <Link to="/buy" className="hover:text-blue-500">
                  Buy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact and Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Email: support@quicksell.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2023 QuickSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
