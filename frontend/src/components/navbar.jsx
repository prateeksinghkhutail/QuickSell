import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Check if the user is logged in based on the presence of a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left corner: Logo and Brand */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600 mr-2">⚡</div>
            <Link
              to="/homepage"
              className="text-xl font-semibold text-gray-800"
            >
              QuickSell
            </Link>
          </div>

          {/* Middle: Menu links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/homepage" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-blue-600">
              Sell
            </Link>
            <Link to="/homepage" className="text-gray-700 hover:text-blue-600">
              Buy
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Right corner: Login and Profile Icon */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn && (
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
            )}
            {isLoggedIn && (
              <FaUserCircle className="text-gray-700 text-2xl hover:text-blue-600 cursor-pointer" />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleNav} className="text-gray-700">
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/homepage"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleNav}
            >
              Home
            </Link>
            <Link
              to="/sell"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleNav}
            >
              Sell
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleNav}
            >
              Contact
            </Link>
            {!isLoggedIn && (
              <Link
                to="/login"
                className="block text-gray-700 hover:text-blue-600"
                onClick={toggleNav}
              >
                Login
              </Link>
            )}
            {isLoggedIn && (
              <div className="block text-gray-700 hover:text-blue-600">
                Profile
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
