import React from 'react';
import callIcon from '../_assets/call.png';
import mailIcon from '../_assets/mail.png';
import timeIcon from '../_assets/time.png';
import locationIcon from '../_assets/location.png';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="p-10">
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
