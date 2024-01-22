import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div
      className="w-full relative border-t-2 border-secondary"
      style={{ backgroundImage: 'url(/footer-bg.png)' }}
    >
      <div
        id="offset"
        className="absolute top-0 left-0 bg-black opacity-90 w-full h-full"
      ></div>
      <div className="md:w-10/12 mx-auto gap-10 grid lg:grid-cols-5  text-white p-5 sm:p-10 relative z-10">
        <div className="flex flex-col mx-auto text-center md:text-left gap-5 md:col-span-2 w-10/12">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 mx-auto"
          />
          <p className="text-justify">
            Our mission is to help businesses thrive by providing smart solutions. We want to make things easier and better for you, ensuring success and growth in every business we support.
          </p>
        </div>
        <div className="flex flex-col mx-auto text-center md:text-left gap-10">
          <h1 className="font-bold">Our Address</h1>
          <p>Abu Dhabi - UAE</p>
          <Link href="tel:+971 56 895 1528">+971 56 895 1528</Link>
          <Link href="mailto:ibtissam@missionpro.ae">ibtissam@missionpro.ae</Link>
        </div>
        <div className="flex flex-col mx-auto text-center md:text-left gap-10">
          <h1 className="font-bold">Quick Links</h1>
          <p className='cursor'> <Link href='/'>Home</Link> </p>
          <p className='cursor'><Link href='/about-us'>About</Link></p>
          <p className='cursor'><Link href='/our-services'>Services</Link></p>
          <p className='cursor'><Link href={'/contact-us'}>Contact</Link></p>
        </div>
        <div className=" mx-auto">
          <h1 className="font-bold">Social Links</h1>
          <div className="flex  gap-3 mt-8">
            <img
              className="w-5"
              src="/fb.png"
              alt=""
            />
            <img
              className="w-5"
              src="twitter.png"
              alt=""
            />
            <img
              className="w-5"
              src="instagram.png"
              alt=""
            />
          </div>
          <div className="fixed bottom-10 right-10 rounded-full cursor-pointer">
            {/* Replace the link with your actual WhatsApp link */}
            <a href="https://wa.me/+971568951528" target="_blank" rel="noopener noreferrer">
              <img

                src="/whatsapp.png"
                alt="WhatsApp Icon"
                className="w-14 h-14"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
