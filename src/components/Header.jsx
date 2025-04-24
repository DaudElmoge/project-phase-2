import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-md py-4 px-6 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img
            src="/images/Zuru Shuttles.png"
            alt="Zuru Shuttles Logo"
            className="w-35 h-35 object-contain rounded-full border-2 border-yellow-400"
          />
          <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
            Zuru Shuttles
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-4 text-sm sm:text-base font-medium">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Booking
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Summary
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Locate Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
