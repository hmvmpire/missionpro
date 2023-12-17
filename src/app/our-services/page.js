import React from 'react'
import Services from '../_components/our-services'
import Contact from '../_components/contact'

const OurServices = () => {
    return (
        <div>
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

            <Services />
            <Contact />
        </div>
    )
}

export default OurServices