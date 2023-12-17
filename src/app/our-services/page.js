import React from 'react'
import Services from '../_components/our-services'
import Contact from '../_components/contact'

const OurServices = () => {
    return (
        <div>

            <div
                style={{ backgroundImage: "url('/our-services.png')" }}
                className="p-10 w-full text-white relative"
            >
                <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-0"></div>
                <div className="relative  text-center md:p-10 md:w-1/2">
                    <span className='md:text-5xl text-3xl border-l-4 border-secondary pl-3'>Our Services</span>
                </div>
            </div>
            <Services />
            <Contact />
        </div>
    )
}

export default OurServices