import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaDesktop, FaLaptop  } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaVirusCovidSlash, FaHardDrive  } from "react-icons/fa6";
import { MdInstallDesktop } from "react-icons/md";

const HomeService = () => {
    return (
        <section className='py-8 md:py-24 md:px-10 px-7 md:mx-[240px] bg-[#f3f3f3]'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Our Repair Services</h3>
                <h1 className='text-3xl font-bold mb-4'>What We Offer to Our Customers<span className='text-[#a1c058]'>.</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                <div className='bg-[#fff] p-8 rounded shadow-lg hover:-translate-y-2 duration-500' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <span className='text-4xl text-[#a1c058]'><FaDesktop /></span>
                    <h3 className='font-semibold text-lg my-2'>Desktop PC</h3>
                    <p className='text-[#7c7c7c] mb-4'>
                        Specializing in desktop PC repair, Computer Solution offers prompt and professional services. From hardware upgrades to software troubleshooting, our expert team ensures your desktop runs smoothly. Trust us for reliable solutions.
                    </p>
                    <Link className='flex items-center gap-1 text-[#a1c058] font-medium'>Read More <span><FaAngleRight /></span></Link>
                </div>
                <div className='bg-[#fff] p-8 rounded shadow-lg hover:-translate-y-2 duration-500' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <span className='text-4xl text-[#a1c058]'><GrCloudSoftware /></span>
                    <h3 className='font-semibold text-lg my-2'>Software Solution</h3>
                    <p className='text-[#7c7c7c] mb-4'>
                        Unlock the power of seamless software solutions with Computer Solution. Our expert team specializes in resolving software issues, providing tailored solutions to enhance performance and user experience. Trust us for efficient and reliable software support.
                    </p>
                    <Link className='flex items-center gap-1 text-[#a1c058] font-medium'>Read More <span><FaAngleRight /></span></Link>
                </div>
                <div className='bg-[#fff] p-8 rounded shadow-lg hover:-translate-y-2 duration-500' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <span className='text-4xl text-[#a1c058]'><FaVirusCovidSlash /></span>
                    <h3 className='font-semibold text-lg my-2'>Antivirous</h3>
                    <p className='text-[#7c7c7c] mb-4'>     
                        Safeguard your digital world with Computer Solution. Our antivirus solutions offer robust protection against cyber threats, ensuring your data's integrity. Trust our expert team to secure your systems, providing peace of mind in today's online landscape.
                    </p>
                    <Link className='flex items-center gap-1 text-[#a1c058] font-medium'>Read More <span><FaAngleRight /></span></Link>
                </div>
                <div className='bg-[#fff] p-8 rounded shadow-lg hover:-translate-y-2 duration-500' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <span className='text-4xl text-[#a1c058]'><FaHardDrive /></span>
                    <h3 className='font-semibold text-lg my-2'>Driver Installaton</h3>
                    <p className='text-[#7c7c7c] mb-4'>
                        Drive efficiency with flawless driver installations from Computer Solution. Our expert team ensures hassle-free integration of essential drivers, enhancing hardware compatibility and optimizing your system's performance. Trust us for seamless installations that keep your devices running at their best.
                    </p>
                    <Link className='flex items-center gap-1 text-[#a1c058] font-medium'>Read More <span><FaAngleRight /></span></Link>
                </div>
                <div className='bg-[#fff] p-8 rounded shadow-lg hover:-translate-y-2 duration-500' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <span className='text-4xl text-[#a1c058]'><FaLaptop /></span>
                    <h3 className='font-semibold text-lg my-2'>Laptop Motherboard</h3>
                    <p className='text-[#7c7c7c] mb-4'>
                        Unlock the potential of your laptop with Computer Solution. Our expert team specializes in motherboard diagnostics and repairs, ensuring optimal performance. Trust us to address intricate motherboard issues, revitalizing your laptop's functionality and extending its lifespan.
                    </p>
                    <Link className='flex items-center gap-1 text-[#a1c058] font-medium'>Read More <span><FaAngleRight /></span></Link>
                </div>
                <div className='bg-[#fff] p-8 rounded shadow-lg hover:-translate-y-2 duration-500' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <span className='text-4xl text-[#a1c058]'><MdInstallDesktop /></span>
                    <h3 className='font-semibold text-lg my-2'>Software Installation</h3>
                    <p className='text-[#7c7c7c] mb-4'>
                        Experience hassle-free software installation with Computer Solution. Our skilled team ensures seamless setups, from essential applications to specialized software. Count on us for efficient, error-free installations that optimize your system's performance. Your software, our expertise.
                    </p>
                    <Link className='flex items-center gap-1 text-[#a1c058] font-medium'>Read More <span><FaAngleRight /></span></Link>
                </div>
            </div>
        </section>
    );
};

export default HomeService;