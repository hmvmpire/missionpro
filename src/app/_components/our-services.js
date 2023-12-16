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
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum',
    icon: designIcon,
  },
  {
    title: 'Market Feasibility',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum',
    icon: marketIcon,
  },
  {
    title: 'Financial Feasibility',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum',
    icon: financeIcon,
  },
  {
    title: 'Project Management',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum',
    icon: projectIcon,
  },
  {
    title: 'Healthcare investment',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum',
    icon: healthIcon,
  },
  {
    title: 'Hospital Setup',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum',
    icon: hospitalIcon,
  },
];

const Services = () => {
  return (
    <div className="mx-auto grid gap-10 text-center m-10">
      <h1 className="font-semibold text-2xl">Our Services</h1>
      <p className="text-[#6B6B6B] w-10/12 mx-auto">
        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etia
      </p>
      <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 md:gap-20 gap-10">
        {servicelist.map((service) => (
          <div className="border px-10 border-secondary p-5 flex flex-col gap-8 items-center shadow-lg">
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
