import React from 'react';

const Header = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 p-3 px-10 ">
      <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0"></div>
      <div className='z-10 relative flex justify-between text-white font-semibold items-center'>
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
    </div>
  );
};

export default Header;
