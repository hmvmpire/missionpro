import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-10">
      <form action="">
        <div className="lg:w-8/12 mx-auto border p-10 shadow grid md:grid-cols-2 w-full">
          <div className="flex flex-col gap-10 md:w-9/12">
            <input
              className="w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Full Name*"
            />
            <input
              className="w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
            />
            <input
              className="w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Phone*"
            />
            <input
              className="w-full border p-2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Subject"
            />
            <textarea
              name=""
              id=""
              className="w-full border p-2"
              placeholder="Enter Your Message"
              cols="30"
              rows="5"
            ></textarea>
            <div>
              <button className="bg-black block p-3 rounded text-white">
                Get Consultation
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
