import React from 'react';
import callIcon from '../_assets/call.png';
import mailIcon from '../_assets/mail.png';
import timeIcon from '../_assets/time.png';
import locationIcon from '../_assets/location.png';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="">
      <div
        style={{ backgroundImage: "url('/hero.png')" }}
        className="p-10 w-full text-white relative"
      >
        <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-0"></div>
        <div className="relative flex flex-col gap-10 md:text-left text-center md:p-10 md:w-1/2">
          <div className="flex flex-col gap-3 md:gap-5  text-3xl md:text-5xl my-3">
            <p>Best Business</p>
            <p>Starts with best</p>
            <span>
              <span className="bg-secondary font-semibold p-2">
                Consultation
              </span>
            </span>
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            ratione, quae, officiis ex mollitia dolorem obcaecati praesentium,
            minima aperiam soluta laboriosam. Commodi distinctio obcaecati
            necessitatibus ipsum quam quas id. Unde?
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white rounded p-3 text-black">
              Make Appointment
            </button>
          </div>
        </div>
      </div>

      <form action="">
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
            <div className='md:block flex justify-center'>
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
              <span>13449268518986</span>
            </span>
            <span className="flex gap-3 w-full items-center">
              <Image
                src={locationIcon}
                alt=""
              />
              <span>Example 1234</span>
            </span>
            <span className="flex gap-3 w-full items-center">
              <Image
                src={mailIcon}
                alt=""
              />
              <span>Example emal</span>
            </span>
            <span className="flex gap-3 w-full items-center">
              <Image
                src={timeIcon}
                alt=""
              />
              <span>Working Hours</span>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
