import Image from 'next/image';
import React from 'react';
import designIcon from '../_assets/design.png';
import financeIcon from '../_assets/finance.png';
import healthIcon from '../_assets/health.png';
import hospitalIcon from '../_assets/hospital.png';
import marketIcon from '../_assets/market.png';
import projectIcon from '../_assets/project.png';

const servicelist = [
  {
    title: 'Design & Construction',
    description:
      'Modern design and construction services make sure functional and artistically pleasing spaces for your projects.',
    icon: designIcon,
  },
  {
    title: 'Market Feasibility',
    description:
      'Thorough analysis to determine the sustainability of your project in the market, providing deliberate visions.',
    icon: marketIcon,
  },
  {
    title: 'Financial Feasibility',
    description:
      'Detailed financial assessments to ensure the affordability of your project, guiding sound investment decisions.',
    icon: financeIcon,
  },
  {
    title: 'Project Management',
    description:
      'Efficiently oversee and coordinate every aspect of your project to ensure timely and successful completion.',
    icon: projectIcon,
  },
  {
    title: 'Healthcare investment',
    description:
      'Custom-made guidance for strategic healthcare investments, aligning financial goals with the dynamic healthcare industry.',
    icon: healthIcon,
  },
  {
    title: 'Cosmetics Center Setup',
    description:
      'Comprehensive support for establishing cosmetic facilities, from planning and design to operational setup, ensuring unified functionality.',
    icon: hospitalIcon,
  },
];

const Services = () => {
  return (
    <div className="mx-auto grid gap-10 text-center m-10">
      <h1 className="font-semibold text-2xl">Our Services</h1>
      <p className="text-[#6B6B6B] w-10/12 mx-auto">
        Discover a range of services modified to your requirements with guaranteed excellence and novelty. From detailed analysis to creative strategies, we deliver comprehensive solutions for your unique business needs.
      </p>
      <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 md:gap-20 gap-10">
        {servicelist.map((service, i) => (
          <div key={i} className="border px-10 border-secondary p-5 flex flex-col gap-8 items-center shadow-lg">
            <Image
              className="w-10"
              src={service.icon}
            />
            <p className="font-semibold">{service.title}</p>
            <p className="text-xs text-[#6B6B6B]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
