import React from 'react';
import choose1 from '../../../assets/images/chooseUs/choose1.png';
import choose2 from '../../../assets/images/chooseUs/choose2.png';

const ChooseUs = () => {
    return (
        <section className='py-8 md:py-24 md:px-10 px-7 md:mx-[240px] flex gap-6 flex-col-reverse md:flex-row'>
            <div className='md:w-1/2 relative' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div  className='md:absolute -left-16 right-4 md:w-[400px]'>
                    <img src={choose1} className='rounded' />
                </div>
                <div className='z-10 md:absolute right-12 bottom-10 md:w-[400px] mt-4 md:mt-0'> 
                    <img src={choose2} className='rounded' />
                </div>
            </div>
            <div className='md:w-1/2 mt-6 md:mt-0' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Why Choose Us</h3>
                <h1 className='text-3xl font-bold'>When You Need Repair</h1>
                <h1 className='text-3xl font-bold mb-4'>We are Always Here<span className='text-[#a1c058]'>.</span></h1>
                <p className='md:w-[600px] mt-3 text-[#939493]'>    
                    Option for Computer Solution to experience a superior level of computer repair service. Our expert team of certified technicians is dedicated to resolving your issues swiftly and effectively. With a customer-centric approach, we prioritize your satisfaction, ensuring a seamless and hassle-free experience.
                </p>
                <p className='md:w-[600px] mt-3 text-[#939493]'>
                    At Computer Solution, we pride ourselves on delivering reliable solutions tailored to your specific needs. Our commitment to excellence extends beyond repairs, encompassing top-tier customer service and competitive pricing. Trust us as your go-to partner for all your computer repair requirements, and let us bring efficiency and satisfaction to your technology journey.
                </p>
                <div className='mt-6 md:mt-4 text-center md:text-left '>
                    <button className='px-[30px] md:px-[32px] bg-[#A1C058] py-[16px] text-white font-medium rounded hover:scale-105 duration-300'>Know More</button>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;