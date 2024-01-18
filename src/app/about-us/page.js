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
            Welcome to our Healthcare Business Counseling! We're here to help doctors, clinics, and healthcare professionals succeed. Our team is like your friendly guide which makes the complicated healthcare world easier for you. Consider us as your partners and not just advisors.
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            We help you with smart plans and follow all the important rules. Whether you are just starting or already have a healthcare business, we are here for you to make you prominent in marketplace.
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            From making good plans to following the important rules, we are your support team. Count on us to make your healthcare business better and stand out. Your success is super important to us!
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
              Our mission is clear: to improve healthcare businesses and make a positive impact. We are here to guide healthcare professionals like you and make sure that your journey in the healthcare field is smoother and more successful.
            </p>
            <p className="text-sm text-justify">
              Our mission is to simplify the complicated aspects of the industry by offering support and knowledge to help you pass through the difficult challenges. We focus on providing practical advice and solutions, from strategic planning to submission which promotes a community where everyone can grow well.
            </p>
            <p className="text-sm text-justify">
              By working together, our purpose is to elevate healthcare practices and support the highest standards, and contribute to healthcare that prioritizes excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-9/12 mx-auto grid md:grid-cols-2">
        <div className="flex flex-col gap-10 p-10">
          <h2 className="text-2xl font-semibold border-l-4 border-secondary pl-3">Our Vision</h2>
          <p className="text-sm text-justify text-[#6B6B6B]">
            Our vision as healthcare business counselor is to see a future where healthcare businesses work for the betterment of humanity. We want to be the ones who help make positive changes happen. Our dream for every healthcare professional is to feel confident and supported.
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            We imagine a world where good plans, new ideas, and doing the right thing all come together. We want healthcare businesses to be known for being excellent.
          </p>
          <p className="text-sm text-justify text-[#6B6B6B]">
            By working together and supporting each other, we want to help create a healthcare world that is easy to access, high-quality, and always getting better. Our vision is to be the helpful guide that pushes healthcare businesses to succeed and make communities healthier.
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
