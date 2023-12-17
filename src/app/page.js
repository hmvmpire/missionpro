import Image from 'next/image';
import Contact from './_components/contact';
import Services from './_components/our-services';
import Testimonials from './_components/testimonials';
import groupImage from './_assets/group.png';
import graphImage from './_assets/graph.png';
import userImage from './_assets/user.png';
import analysisImage from './_assets/analysis.png';
import toparrowImage from './_assets/toparrow.png';
import smileImage from './_assets/smile.png';
import medalImage from './_assets/medal.png';
import usersImage from './_assets/users.png';
import vidImage from './_assets/vid.png';
import discussionImage from './_assets/discussion.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div
        style={{ backgroundImage: "url('/hero.png')" }}
        className="p-10 w-full text-white relative"
      >
        <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-0"></div>
        <div className="relative flex flex-col gap-10 md:text-left text-center md:p-10 md:w-1/2">
          <div className="flex flex-col gap-3 md:gap-5  text-3xl md:text-5xl my-3">
            <p>Best Business</p>
            <p>Starts with best</p>
            <span>
              <span className="bg-secondary font-semibold p-2">
                Consultation
              </span>
            </span>
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            ratione, quae, officiis ex mollitia dolorem obcaecati praesentium,
            minima aperiam soluta laboriosam. Commodi distinctio obcaecati
            necessitatibus ipsum quam quas id. Unde?
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white rounded p-3 text-black">
              Make Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-9/12 mx-auto grid md:grid-cols-2">
        <div className="flex flex-col gap-10 p-10">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-sm leading-8 text-justify text-[#6B6B6B]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
          </p>
          <div>
            <button className="bg-primary-grad p-3 rounded text-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="p-10 flex items-center">
          <Image
            className="w-9/12  mx-auto object-contain"
            src={groupImage}
          />
        </div>
      </div>
      <div className="w-full relative bg-primary-grad p-10 mt-14">
        <div className="w-full absolute h-full bg-black opacity-50 top-0 left-0"></div>
        <div className="grid md:grid-cols-2 relative z-10">
          <div className="flex justify-center">
            <Image
              src={discussionImage}
              className="mb-10 md:mt-[-6rem] w-1/2"
            />
          </div>
          <div className="md:w-10/12 mx-auto flex flex-col justify-center gap-10">
            <h2 className="text-2xl font-semibold">Our Experience</h2>
            <p className="leading-10">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
              molestie, dictum est a, mattis tellus. Sed sit amet, consectetur
              adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
              tellus. Sed
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-10/12 mx-auto grid gap-10 text-center m-10">
        <h1 className="font-semibold text-2xl">
          Creative Solutions For Grown Your <br /> Business
        </h1>
        <p className="text-[#6B6B6B] w-10/12 mx-auto">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etia
        </p>
        <div className="grid lg:grid-cols-4">
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-5 items-center justify-center">
            <Image src={analysisImage} />
            <p className="font-semibold">Business Analysis</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum
            </p>
          </div>
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-2 items-center justify-center">
            <Image src={analysisImage} />
            <p className="font-semibold">Marketing Strategy</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum
            </p>
          </div>
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-2 items-center justify-center">
            <Image src={userImage} />
            <p className="font-semibold">User Experience</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum
            </p>
          </div>
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-2 items-center justify-center">
            <Image src={graphImage} />
            <p className="font-semibold">Data Analysis</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full relative"
        style={{ backgroundImage: "url('/business-team.png')" }}
      >
        <div className="absolute w-full h-full bg-primary-grad top-0 left-0 opacity-80" />
        <div className="w-11/12 mx-auto grid text-sm md:text-base text-center grid-cols-4 py-10 text-white relative z-10">
          <div className="mx-auto flex flex-col gap-5  items-center">
            <Image
              className="w-8 object-fill"
              src={toparrowImage}
            />
            <p>100+</p>
            <p>Projects Completed</p>
          </div>
          <div className="mx-auto flex flex-col gap-5  items-center">
            <Image
              className="w-8 object-fill"
              src={smileImage}
            />
            <p>100+</p>
            <p>Happy Clients</p>
          </div>
          <div className="mx-auto flex flex-col gap-5  items-center">
            <Image
              className="w-8 object-fill"
              src={medalImage}
            />
            <p>100+</p>
            <p>Winning Awards</p>
          </div>
          <div className="mx-auto flex flex-col gap-5 items-center">
            <Image
              className="w-8 object-fill"
              src={usersImage}
            />
            <p>100+</p>
            <p>Expert Team Members</p>
          </div>
        </div>
      </div>
      <Services />
      <div className="w-full flex md:justify-end justify-center md:w-9/12 mb-5">
        <Link
          href="/our-services"
          className="text-lg text-[#253D91] font-semibold"
        >
          See All {'-->'}
        </Link>{' '}
      </div>

      <div className="w-full">
        <div className="w-full md:w-10/12 mx-auto grid gap-10 text-center m-10">
          <h1 className="font-semibold text-2xl">How we Grow Your Business</h1>
          <p className="text-[#6B6B6B] w-10/12 mx-auto">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed Vorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etia
          </p>
          <div className="flex justify-center ">
            <Image src={vidImage} />
          </div>
        </div>
        <div className="bg-primary-grad h-40 mt-[-6rem] "> </div>
      </div>
      <Testimonials />
      <Contact />
    </main>
  );
}
