import React from 'react';
import logo from '../../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom';
import { GoTriangleRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='py-8 md:py-24 md:px-10 px-7 md:mx-[240px] bg-[#f3f3f3]'>
            <div className='md:flex items-center justify-between'>
                <div>
                    <Link to='/' className='flex items-center md:gap-3 gap-1'>
                        <img src={logo} className='w-12' />
                        <h1 className='text-2xl font-bold'>Computer Solution<span className='text-[#a1c058]'>.</span></h1>
                    </Link>
                    <p className='md:w-[500px] text-[#7c7c7c] my-4'>
                        We specialize in comprehensive computer repair solutions to ensure your device runs seamlessly.Trust us to breathe new life into your system, optimizing speed and functionality. 
                    </p>
                </div>
                <div className='mt-6 md:mt-0'>
                    <h1 className='font-semibold text-lg mb-4'>Navigation</h1>
                    <Link className='flex items-center gap-1'>
                        <span className='text-lg text-[#a1c058]'><GoTriangleRight /></span>
                        <h4>FAQ's</h4>
                    </Link>
                    <Link className='flex items-center gap-1 mt-2'>
                        <span className='text-lg text-[#a1c058]'><GoTriangleRight /></span>
                        <h4>Privacy Policy</h4>
                    </Link>
                    <Link className='flex items-center gap-1 mt-2'>
                        <span className='text-lg text-[#a1c058]'><GoTriangleRight /></span>
                        <h4>Term & Condition</h4>
                    </Link>
                </div>
                <div className='mt-6 md:mt-0'>
                    <h1 className='font-semibold text-lg mb-4'>Company</h1>
                    <Link className='flex items-center gap-1'>
                        <span className='text-lg text-[#a1c058]'><GoTriangleRight /></span>
                        <h4>About</h4>
                    </Link>
                    <Link className='flex items-center gap-1 mt-2'>
                        <span className='text-lg text-[#a1c058]'><GoTriangleRight /></span>
                        <h4>Team</h4>
                    </Link>
                    <Link className='flex items-center gap-1 mt-2'>
                        <span className='text-lg text-[#a1c058]'><GoTriangleRight /></span>
                        <h4>Contact</h4>
                    </Link>
                </div>
                <div className='mt-6 md:mt-0'>
                    <h1 className='font-semibold text-lg mb-4'>Contact Information</h1>
                    <Link className='flex items-center gap-2'>
                        <span className='text-lg text-[#a1c058]'><FaLocationDot /></span>
                        <h4>12/A, Basundhara, Dhaka</h4>
                    </Link>
                    <Link className='flex items-center gap-2 mt-2'>
                        <span className='text-lg text-[#a1c058]'><FaPhoneAlt /></span>
                        <h4>+880 1727 087717</h4>
                    </Link>
                    <Link className='flex items-center gap-2 mt-2'>
                        <span className='text-lg text-[#a1c058]'><FaEnvelope /></span>
                        <h4>support@comso.com</h4>
                    </Link>
                </div>
            </div>
            <hr className='border my-6' />
            <div className='flex items-center justify-between flex-col md:flex-row'>
                <p className='font-medium'>
                    Copyright &copy; 2023 Computer Solution. Powered by Computer Solution
                </p>
                <div className='flex items-center gap-6 mt-6 md:mt-0'>
                    <span className='text-[#a1c058] text-2xl'>< FaFacebook /></span>
                    <span className='text-[#a1c058] text-2xl'>< FaInstagram /></span>
                    <span className='text-[#a1c058] text-2xl'>< FaTwitter /></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;