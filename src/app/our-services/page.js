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
                <div className="relative  text-center md:p-10 md:w-1/2">
                    <span className='text-5xl'>Our Services</span>
                </div>
            </div>
            <Services />
            <Contact />
        </div>
    )
}

export default OurServices