'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 p-3 px-10 ">
      <div className={`bg-black opacity-50 w-full ${isMobileMenuOpen ? 'h-screen' : 'h-full'}  absolute top-0 left-0`} />
      <div className="z-10 relative flex justify-between text-white font-semibold items-center">
        <Link href={'/'}>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12"
          />
        </Link>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden text-center absolute top-20 font-normal left-0 right-0 z-[99999] rounded-lg bg-primary-grad border-2 border-secondary text-black  p-4"
          >
            <div className="flex flex-col gap-4">
              <Link
                onClick={toggleMobileMenu}
                href="/"
              >
                Home
              </Link>
              <div className='border-secondary border w-1/5 mx-auto' />
              <Link
                onClick={toggleMobileMenu}
                href="/about-us"
              >
                About Us
              </Link>
              <div className='border-secondary border w-1/5 mx-auto' />

              <Link
                onClick={toggleMobileMenu}
                href="/our-services"
              >
                Our Services
              </Link>
              <div className='border-secondary border w-1/5 mx-auto' />

              <Link
                onClick={toggleMobileMenu}
                href="#"
              >
                News
              </Link>
              <div className='border-secondary border w-1/5 mx-auto' />

              <Link
                onClick={toggleMobileMenu}
                href="/contact-us"
              >
                Contact Us
              </Link>

            </div>
          </div>
        )}

        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/our-services">Our Services</Link>
          <Link href="#">News</Link>
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
