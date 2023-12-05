import React from 'react';
import aboutImg from '../../../assets/images/about/about.png';
import { MdSettings } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const WhoWe = () => {
    return (
        <section className='md:flex items-center justify-between py-8 md:py-24 md:px-10 px-7 md:mx-[240px]'>
            <div className='md:w-1/2 relative'>
                <img src={aboutImg} className='rounded'/>
                <div className='bg-[#fff] p-4 absolute -bottom-3 md:-bottom-1 right-5'>
                    <div className='flex items-center text-[#]'>
                    <FaStar className='text-[#a1c058]' />
                    <FaStar className='text-[#a1c058]' />
                    <FaStar className='text-[#a1c058]' />
                    <FaStar className='text-[#a1c058]' />
                    <FaStar className='text-[#a1c058]' />
                    </div>
                    <p className='font-medium mt-1 text-[#939493]'>Rated 5 out of 5 by our clients</p>
                </div>
            </div>
            <div className='md:w-1/2 mt-10 md:mt-0'>
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Who We Are</h3>
                <h1 className='text-3xl font-bold mb-4'>
                    We Can Solve All Types Of <br /> Computer & Laptops<span className='text-[#a1c058]'>.</span>
                </h1>
                <p className='my-6 md:my-4 text-[#939493] leading-7'>
                    We specialize in comprehensive computer repair solutions to ensure your device runs seamlessly.Trust us to breathe new life into your system, optimizing speed and functionality. Experience top-notch customer service and competitive prices. Your satisfaction is our priority! Contact us today for efficient, affordable, and professional computer repair.
                </p>
                <div>
                    <div className='flex gap-3'>
                        <span className='w-52 h-16 md:w-20 md:h-12 bg-[#a1c058] text-white flex items-center justify-center text-3xl rounded'>
                            <RiTeamLine />
                        </span>
                        <div className=''>
                            <h2 className='text-lg font-medium'>Expert Team</h2>
                            <p className='text-[#939493] mt-1'>
                                Meet our expert team - skilled professionals dedicated to delivering top-tier computer repair and solutions.
                            </p>
                        </div>
                    </div >
                    <div className='mt-4 flex gap-3'>
                        <span className='w-48 h-16 md:w-16 md:h-12 bg-[#a1c058] text-white flex items-center justify-center text-3xl rounded'>
                            <MdSettings />
                        </span>
                        <div>
                            <h2 className='text-lg font-medium'>Quick Repair</h2>
                            <p className='text-[#939493] mt-1'>
                                Quick, efficient computer repair from our expert team. Get your device up and running fast!
                            </p>
                        </div>
                    </div>
                    <div className='mt-6 md:mt-4 text-center md:text-left'>
                        <button className='px-[30px] md:px-[32px] bg-[#A1C058] py-[16px] text-white font-medium rounded hover:scale-105 duration-300'>Know More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWe;