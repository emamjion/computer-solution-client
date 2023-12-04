import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png';
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const [open,setOpen] = useState(false);
    const links = [
        {name: 'Home', links: '/'},
        {name: 'About', links: '/about'},
        {name: 'Services', links: '/services'},
        {name: 'Blogs', links: '/blogs'},
        {name: 'Contact', links: '/contact'},
    ]
    
    return (
        <nav className={`md:flex items-center justify-between py-4 md:px-10 px-2 md:mx-[240px]`}>
            <Link to='/' className='flex items-center md:gap-3 gap-1'>
                <img src={logo} className='w-12' />
                <h1 className='text-2xl font-bold'>Computer Solution<span className='text-[#A1C058]'>.</span></h1>
            </Link>
            <div onClick={() => setOpen(!open)} className='text-3xl md:text-white absolute right-8 top-6 cursor-pointer md:hidden'>
                {open ? <FaTimes /> : <HiMenuAlt3 /> }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-6 bg-[#F3F3F3] md:bg-[#fff] absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} `}>
                {
                    links.map((link,index) => <li key={index}  className='md:ml-8 font-medium text-lg md:my-0 my-7'>
                        <NavLink to={link.links}>{link.name}</NavLink>
                    </li>)
                }
                <div className='flex items-center gap-6 md:ml-16'>
                    <p>Profile</p>
                    <Link className='px-[32px] bg-[#A1C058] py-[12px] text-white font-medium rounded hover:scale-105 duration-300' to='/login'>Login</Link>
                </div>
            </ul>
        </nav>
    );
};

export default Header;