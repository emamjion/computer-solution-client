import React from 'react';
import bannerImg from '../../../assets/images/banner/banner2.png';

const Banner = () => {
    return (
        <section className='md:flex items-center justify-between py-4 md:px-10 px-7 md:mx-[240px]'>
            <div className='md:w-1/2'>
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Computer repair service</h3>
                <h1 className='text-4xl md:text-6xl font-bold tracking-wider'>All Things <br /> Need to <br /> Repair<span className='text-[#a1c058]'>.</span></h1>
                <p className='my-8 md:my-12 text-[#939493] leading-8'>    
                    Elevate your computer's performance with Computer Solution! Our expert technicians provide swift and reliable repairs for hardware and software issues. From virus removal to data recovery, we've got the solutions you need. Experience top-tier service and competitive prices. Trust us for all your computer repair needs!
                </p>
                <div className='flex items-center gap-4'>
                    <button className='px-[30px] md:px-[32px] bg-[#A1C058] py-[16px] text-white font-medium rounded hover:scale-105 duration-300'>Get Started</button>
                    <button className='px-[30px] md:px-[32px] bg-[#f3f3f3] py-[16px] text-[#000] font-medium rounded hover:scale-105 duration-300'>Read More</button>
                </div>
            </div>
            <div className='mt-6 md:mt-0'>
                <img src={bannerImg} className='rounded' />
            </div>
        </section>
    );
};

export default Banner;