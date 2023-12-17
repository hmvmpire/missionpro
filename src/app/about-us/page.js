import React from 'react';
import Services from '../_components/our-services';
import Testimonials from '../_components/testimonials';
import Contact from '../_components/contact';
import groupImage from '../_assets/group.png';
import meetingImage from '../_assets/meeting.png';
import businessImage from '../_assets/business.png';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/about-us.png')" }}
        className="p-10 w-full text-white relative"
      >
        <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-0"></div>
        <div className="relative text-center md:p-10 md:w-1/2">
          <span className='md:text-5xl border-l-4 border-secondary pl-3 text-3xl'>Who We Are</span>
        </div>
      </div>

      <div className="w-full md:w-9/12 mx-auto grid md:grid-cols-2">
        <div className="flex flex-col gap-10 p-10">
          <h2 className="text-2xl font-semibold border-l-4 border-secondary pl-3">About us</h2>
          <p className="text-sm text-justify text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed
          </p>
        </div>
        <div className="p-10 flex items-center">
          <Image
            className="w-9/12  mx-auto object-contain"
            src={groupImage}
          />
        </div>
      </div>
      <div className="w-full lg:w-9/12 mx-auto flex justify-end">
        <div className="relative xl:w-3/5 p-10 bg-primary-grad lg:rounded-lg lg:mr-20">
          <div className="xl:flex items-center absolute left-[-23rem] z-50 hidden">
            <Image
              className="w-full xl:h-[20rem] rounded-lg mx-auto object-contain"
              src={businessImage}
            />
          </div>
          <div className="absolute w-full h-full bg-black opacity-30 rounded-lg top-0 left-0 "></div>
          <div className="flex flex-col gap-10 z-10 relative  px-10">
            <h2 className="text-2xl font-semibold border-l-4 border-secondary pl-3">Our Mission</h2>
            <p className="text-sm text-justify">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
              molestie, dictum est a, mattis tellus. Sed
            </p>
            <p className="text-sm text-justify">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
              molestie, dictum est a, mattis tellus. Sed
            </p>
            <p className="text-sm text-justify">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
              molestie, dictum est a, mattis tellus. Sed
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-9/12 mx-auto grid md:grid-cols-2">
        <div className="flex flex-col gap-10 p-10">
          <h2 className="text-2xl font-semibold border-l-4 border-secondary pl-3">Our Vision</h2>
          <p className="text-sm text-justify text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed
          </p>
        </div>
        <div className="p-10 flex items-center">
          <Image
            className="w-9/12  mx-auto object-contain"
            src={meetingImage}
          />
        </div>
      </div>
      <div className="w-full md:w-9/12 mx-auto">
        <Services />
      </div>
      <div className="w-full md:w-9/12 mx-auto">
        <Testimonials />
      </div>
      <Contact />
    </div>
  );
};

export default WhoWeAre;
