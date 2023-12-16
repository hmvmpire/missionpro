import React from 'react';
import arrowIcon from '../_assets/arrow.png';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-900 via-blue-800 relative to-indigo-900 p-10 flex justify-center mx-auto text-white text-center">
      <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-full"></div>
      <div className="w-full lg:w-9/12 z-10">
        <span className="md:text-2xl text-xl flex items-center justify-center gap-10">
          <span className="flex justify-end">
            <p>
              {' '}
              Send a Massage we will get <br /> back’ to you
            </p>
          </span>
          <Image
            className="ml-10 hidden md:flex justify-end"
            src={arrowIcon}
          />
        </span>
        <div className="grid gap-10 md:grid-cols-5 my-10 md:mx-10">
          <input
            className="w-full col-span-2 p-2 rounded"
            type="text"
            placeholder="Name"
            name=""
            id=""
          />
          <input
            className="w-full col-span-2 p-2 rounded"
            type="text"
            name=""
            id=""
            placeholder="Email"
          />
          <div className="flex justify-center col-span-2 md:col-span-1">
            <button className="border border-white p-2 rounded px-8">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
