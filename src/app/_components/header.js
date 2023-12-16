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

        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          {/* <div className="md:flex lg:gap-10 gap-5 hidden"> */}
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/our-services">Our Services</Link>
          <Link href="/">News</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <button className="hidden lg:flex bg-none border border-white rounded p-2 text-xs md:text-base">
          Make Appointment
        </button>
      </div>

    </div>
  );
};

export default Header;
