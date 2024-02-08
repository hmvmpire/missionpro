import Image from 'next/image';
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
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./_components/our-services'), {
  ssr: false,
})
const Contact = dynamic(() => import('./_components/contact'), {
  ssr: false,
})
const Testimonials = dynamic(() => import('./_components/testimonials'), {
  ssr: false,
})

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
            Get the best help for your business by just one click. Ask our
            counselling experts for guidance, make your business grow and
            succeed with your unique ideas and innovations.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white rounded p-3 text-black">
             <a href="https://wa.me/+971568951528" target="_blank">Make Appointment</a>  
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-9/12 mx-auto grid md:grid-cols-2">
        <div className="flex flex-col gap-10 p-10">
          <h2 className="text-2xl font-semibold  border-l-4 border-secondary pl-3">
            About Us
          </h2>
          <p className="text-sm leading-8 text-justify text-[#6B6B6B]">
            Mission Pro is your trusted companion and expert advisor in the
            field of cosmetic clinic consultancy. Our focus is on delivering
            tailored guidance and specialized solutions to navigate the
            intricacies of the beauty and aesthetics industry. We are dedicated
            to empowering cosmetic clinics for enduring success and excellence,
            providing strategic insights that foster sustainable growth. With a
            steadfast commitment to your prosperity, Mission Pro is here to
            guide you through the unique challenges and opportunities in the
            dynamic world of cosmetic healthcare.
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
              Mission pro has been a reliable companion in healthcare business
              journeys with years of hands-on experience. The deep understanding
              of our team in the medical industry and its complications,
              combined with a past performance of successful guidance, ensures
              that your mission succeed with a noteworthy appearance. Trust us
              to turn our experience into valuable support for your business
              success.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-10/12 mx-auto grid gap-10 text-center m-10">
        <h1 className="font-semibold text-2xl">
          Creative Solutions For Grown Your <br /> Business
        </h1>
        <p className="text-[#6B6B6B] w-10/12 mx-auto">
          Our creative solutions allow you to go beyond the boundaries and
          promotes growth that pushes your business enterprise to exceptional
          heights in the developing world of success.
        </p>
        <div className="grid lg:grid-cols-4">
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-5 items-center justify-center">
            <Image src={analysisImage} />
            <p className="font-semibold">Business Analysis</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Exploring insightful perspectives to understand the business
              deeply and covering the way for creative growth solutions.
            </p>
          </div>
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-2 items-center justify-center">
            <Image src={analysisImage} />
            <p className="font-semibold">Marketing Strategy</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Crafting innovative plans to boost the business and blending it
              with creativity to raise the standards in market.
            </p>
          </div>
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-2 items-center justify-center">
            <Image src={userImage} />
            <p className="font-semibold">User Experience</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Designing appealing interactions and prioritizing user
              satisfaction to create a memorable and pleasing experience for
              business growth.
            </p>
          </div>
          <div className="text-center  w-10/12 mx-auto flex flex-col p-4 gap-2 items-center justify-center">
            <Image src={graphImage} />
            <p className="font-semibold">Data Analysis</p>
            <p className="text-sm leading-7 text-[#6B6B6B]">
              Abstracting valuable visions creatively by using data analytics to
              inform strategic decisions for sustainable business development.
            </p>
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
            We propel your business through intentional solutions, by maximum
            profitable ideas and effective management that promotes remarkable
            success in a dynamic business environment.
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
