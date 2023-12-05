import React from 'react';
import img1 from '../../../assets/images/Team/team-1.png';
import img2 from '../../../assets/images/Team/team-2.png';
import img3 from '../../../assets/images/Team/team-3.png';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const OurTeam = () => {
    return (
        <section className='py-8 md:py-24 md:px-10 px-7 md:mx-[240px]'>
            <div>
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Our Team</h3>
                <h1 className='text-3xl font-bold mb-4'>Meet Our Team<span className='text-[#a1c058]'>.</span></h1>
            </div>
            <div className='md:flex items-center gap-6 md:mt-10'>
                <div className='relative'>
                    <img src={img1} className='rounded shadow-2xl' />
                    <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col opacity-0 hover:opacity-70 bg-[#a1c058] duration-500'>
                        <h1 className='text-3xl font-semibold'>Ashis Mohon</h1>
                        <p>Founder</p>
                        <div className='flex items-center gap-5 mt-4'>
                            <span className='text-2xl'><FaFacebook/></span>
                            <span className='text-2xl'><FaLinkedin/></span>
                            <span className='text-2xl'><FaTwitter/></span>
                        </div>
                    </div>
                </div>
                <div className='relative mt-4 md:mt-0'>
                    <img src={img2} className='rounded shadow-2xl' />
                    <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col opacity-0 hover:opacity-70 bg-[#a1c058] duration-500'>
                        <h1 className='text-3xl font-semibold'>Monali Kundu</h1>
                        <p>Senior Technician</p>
                        <div className='flex items-center gap-5 mt-4'>
                            <span className='text-2xl'><FaFacebook/></span>
                            <span className='text-2xl'><FaLinkedin/></span>
                            <span className='text-2xl'><FaTwitter/></span>
                        </div>
                    </div>
                </div>
                <div className='relative mt-4 md:mt-0'>
                    <img src={img3} className='rounded shadow-2xl' />
                    <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col opacity-0 hover:opacity-70 bg-[#a1c058] duration-500'>
                        <h1 className='text-3xl font-semibold'>Kajol Emty</h1>
                        <p className=''>Technician</p>
                        <div className='flex items-center gap-5 mt-4'>
                            <span className='text-2xl'><FaFacebook/></span>
                            <span className='text-2xl'><FaLinkedin/></span>
                            <span className='text-2xl'><FaTwitter/></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;