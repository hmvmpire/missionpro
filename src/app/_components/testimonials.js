'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import jenny from '../_assets/jenny.png';

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
      ></div>
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
    <div className="w-full flex flex-col gap-5 my-20 p-10">
      <h2 className="text-2xl text-center font-semibold">
        Clients Testimonials
      </h2>
      <Slider {...settings}>
        <div className="p-10 flex flex-col">
          <div className="flex items-center gap-3 my-5">
            <Image
              alt=''
              src={jenny}
              className="rounded-full"
            />
            <span>Jenny</span>
          </div>
          <p className="text-sm text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed
          </p>
        </div>
        <div className="p-10 flex flex-col">
          <div className="flex items-center gap-3 my-5">
            <Image
              alt=''
              src={jenny}
              className="rounded-full"
            />
            <span>James</span>
          </div>
          <p className="text-sm text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed
          </p>
        </div>
        <div className="p-10 flex flex-col">
          <div className="flex items-center gap-3 my-5">
            <Image
              alt=''
              src={jenny}
              className="rounded-full"
            />
            <span>Loren</span>
          </div>
          <p className="text-sm text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed
          </p>
        </div>
        <div className="p-10 flex flex-col">
          <div className="flex items-center gap-3 my-5">
            <Image
              alt=''
              src={jenny}
              className="rounded-full"
            />
            <span>Jenny</span>
          </div>
          <p className="text-sm text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed
          </p>
        </div>
        <div className="p-10 flex flex-col">
          <div className="flex items-center gap-3 my-5">
            <Image
              alt=''
              src={jenny}
              className="rounded-full"
            />
            <span>Jenny</span>
          </div>
          <p className="text-sm text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
