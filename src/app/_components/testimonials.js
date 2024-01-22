'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import jenny from '../_assets/jenny.png';

const testimonials = [
  {
    name: 'John Smith',
    comment: 'FH Solutions has been a lifesaver for me. I was facing complex debt collection issues, and their team handled it with utmost professionalism. They truly live up to their promise of quick and smooth solutions.',
  },
  {
    name: 'Emily Davis',
    comment: "I had the pleasure of working with FH Solutions for my company's establishment.Their deep knowledge of UAE laws and expertise in tax and financial matters made the process seamless.Highly recommended!",
  },
  {
    name: 'Ahmed Khalid',
    comment: 'FH Solutions has an exceptional team of debt collection experts. Their proven track record in debt collection cases is a testament to their skills and commitment to success. Thank you for your outstanding service!',
  },
  {
    name: 'Sarah Johnson',
    comment: 'When it comes to compliance, contract drafting, and tax issues, FH Solutions is the go-to partner. Their consultations are top-notch, covering every aspect of business setup. I am grateful for their invaluable support.',
  },
  {
    name: 'Hassan Ali',
    comment: 'The legal advice and solutions provided by FH Solutions have been instrumental in safeguarding our interests. From organizational structure to mergers and acquisitions, they cover it all with expertise. Don’t wait, consult them now!',
  },
  {
    name: 'Linda Wilson',
    comment: 'FH Solutions has been our legal shield of experience, protecting our rights and interests. Their commitment to preventing legal problems is unparalleled. Trustworthy, professional, and highly recommended!',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className="rounded-full w-5 h-5"
        style={{
          background: i === 0 ? '#153D6C' : '#DDD',
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full flex flex-col gap-5 my-10 p-10">
      <h2 className="text-2xl text-center font-semibold">
        Clients Testimonials
      </h2>
      <Slider {...settings}>
        {
          testimonials.map((item, i) => (
            <div key={i} className="p-10 flex flex-col">
              <div className="flex items-center gap-3 my-5">
                <Image
                  alt=''
                  width={50}
                  height={50}
                  src='/avatar.jpeg'
                  className="rounded-full"
                />
                <span>{item.name}</span>
              </div>
              <p className="text-sm text-[#6B6B6B]">
                {item.comment}
              </p>
            </div>
          ))
        }

      </Slider>
    </div>
  );
};

export default Testimonials;
