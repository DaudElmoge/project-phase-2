import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img
            src="https://images.ctfassets.net/1nvpgv2kdfc0/51dciW7FJ8Olsi1Wnsg16y/f6c4c29caa98d517f0563b27e678fcc9/Buses_in_the_United_States.jpg"
            alt="Zuru Shuttles Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
          />
          <h1>Zuru Shuttles</h1>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Booking</a>
          <a href="#">Locate Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
