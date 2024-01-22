import React from 'react';
import callIcon from '../_assets/call.png';
import mailIcon from '../_assets/mail.png';
import timeIcon from '../_assets/time.png';
import locationIcon from '../_assets/location.png';
import Link from 'next/link';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="">
      <div
        style={{ backgroundImage: "url('/contact-us.png')" }}
        className="p-10 w-full text-white relative"
      >
        <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-0"></div>
        <div className="relative text-center md:p-10 md:w-1/2">
          <span className='text-5xl border-l-4 border-secondary pl-3'>Contact Us</span>
        </div>
      </div>

      <form action="" className='my-10'>
        <div className="lg:w-8/12 mx-auto border p-10 rounded-lg shadow grid md:grid-cols-2 w-full">
          <div className="flex flex-col gap-10 text-sm md:text-base">
            <input
              className="rounded w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Full Name*"
            />
            <input
              className="rounded w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
            />
            <input
              className="rounded w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Phone*"
            />
            <input
              className="rounded w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Subject"
            />
            <textarea
              name=""
              id=""
              className="rounded w-full border p-2"
              placeholder="Enter Your Message"
              cols="30"
              rows="5"
            ></textarea>
            <div className="md:block flex justify-center">
              <button className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 block p-3 rounded text-white">
                Get Consultation
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10 mx-auto items-center mt-5">
            <span className="flex gap-3 w-full items-center">
              <Image
                src={callIcon}
                alt=""
              />
              <span><Link href="tel:+971 56 895 1528">+971 56 895 1528</Link></span>
            </span>
            <span className="flex gap-3 w-full items-center">
              <Image
                src={locationIcon}
                alt=""
              />
              <span>Abu Dhabi - UAE</span>
            </span>
            <span className="flex gap-3 w-full items-center">
              <Image
                src={mailIcon}
                alt=""
              />
              <span><Link href="mailto:ibtissam@missionpro.ae">info@missionpro.ae</Link></span>
            </span>
            <span className="flex gap-3 w-full items-center">
              <Image
                src={timeIcon}
                alt=""
              />
              <span>Working Hours</span>
              <span>09:00 AM to 06:00 PM</span>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
