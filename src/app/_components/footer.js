import React from 'react';
import logo from '../_assets/logo.png';

const Footer = () => {
  return (
    <div className="w-full bg-[#171A1DF0]">
      <div className="md:w-10/12 mx-auto gap-10 grid lg:grid-cols-5  text-white p-10">
        <div className="flex flex-col gap-5 md:col-span-2 w-10/12">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12"
          />
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            corporis doloribus iusto voluptatibus ab? Nobis distinctio, nulla
            minus eaque deserunt, laborum at debitis tempore, quod provident
            voluptatem asperiores temporibus quibusdam!
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="font-bold">Our Address</h1>
          <p>Example adress</p>
          <p>025658768</p>
          <p>info@fhslawfirm.com</p>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="font-bold">Quick Links</h1>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
        <div>
          <h1 className="font-bold">Social Links</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
