import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 p-5 px-10 flex justify-between text-white font-semibold items-center">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-12"
      />
      <div className="md:flex gap-10 hidden">
        <span>Home</span>
        <span>About Us</span>
        <span>Our Services</span>
        <span>News</span>
        <span>Contact Us</span>
      </div>
      <button className="bg-none border border-white rounded p-2 text-xs md:text-base">
        Make Appointment
      </button>
    </div>
  );
};

export default Header;
