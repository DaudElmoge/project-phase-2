import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img
            src="https://images.ctfassets.net/1nvpgv2kdfc0/51dciW7FJ8Olsi1Wnsg16y/f6c4c29caa98d517f0563b27e678fcc9/Buses_in_the_United_States.jpg"
            alt="Zuru Shuttles Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-yellow-400"
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
            Locate Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
