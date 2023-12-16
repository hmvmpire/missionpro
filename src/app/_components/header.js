import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 p-3 px-10 ">
      <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0"></div>
      <div className="z-10 relative flex justify-between text-white font-semibold items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12"
        />
        <div className="md:flex lg:gap-10 gap-5 hidden">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/our-services">Our Services</Link>
          <Link href="/">News</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <button className="bg-none border border-white rounded p-2 text-xs md:text-base">
          Make Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
