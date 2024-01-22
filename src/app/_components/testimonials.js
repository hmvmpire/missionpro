'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import jenny from '../_assets/jenny.png';

const testimonials = [
  {
    name: "Alice Turner",
    comment: "Working with the healthcare business counseling team has been a game-changer for my clinic. They truly are our partners, not just advisors. Their smart plans and unwavering support have made my cosmetics clinic investment stand out in the marketplace. Grateful to have them as our friendly guide!",
  },
  {
    name: "Dr. James Mitchell",
    comment: "As a healthcare professional, I appreciate the dedicated support provided by the counseling team. They go beyond advising; they are our support team in making good plans and ensuring we follow the important rules. Their commitment to our success is evident, making our journey smoother in the complicated healthcare world.",
  },
  {
    name: "Emily Rodriguez",
    comment: "The healthcare business counseling team has been instrumental in improving my healthcare business. Their practical advice and solutions have helped me navigate challenges, from strategic planning to submission. Proud to be a part of a community that values excellence and growth. Thank you for being the guiding force in my success.",
  },
  {
    name: "Dr. Sofia Patel",
    comment: "The mission of the healthcare business counseling team aligns perfectly with my vision for a successful healthcare practice. Their focus on positive impact and simplifying industry complexities has elevated my practice. I feel confident and supported, knowing that they are working towards a healthcare world that prioritizes excellence and growth.",
  },
  {
    name: "Mark Thompson",
    comment: "I have witnessed positive changes in my healthcare business since partnering with the counseling team. Their mission to support the highest standards resonates well with my goals. Together, we are creating a healthcare world that is easy to access, high-quality, and always improving. Proud to be associated with a team that pushes us to succeed.",
  },
  {
    name: "Dr. Maria Gonzalez",
    comment: "The vision of the healthcare business counseling team is inspiring. They are not just counselors; they are the helpful guides pushing healthcare businesses to succeed. Their dream of a healthcare world known for excellence aligns with my aspirations. Grateful for their continuous support in making communities healthier and practices successful.",
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
