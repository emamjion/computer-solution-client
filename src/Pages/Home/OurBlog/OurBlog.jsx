import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const OurBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json').then(res => res.json()).then(data => setBlogs(data))
    }, [])
    
    return (
        <section className='py-8 md:py-24 md:px-10 px-7 md:mx-[240px]'>
            <div>
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Our Blog</h3>
                <h1 className='text-3xl font-bold mb-4'>Latest News & Blog<span className='text-[#a1c058]'>.</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10'>
                {
                    blogs.map(blog => <div
                        key={blog.id}
                        className=''
                    >
                        <div className='shadow-2xl p-8 rounded hover:-translate-y-4 duration-500'>
                            <img src={blog.image} className='rounded hover:scale-105 duration-500' />
                            <div className='mt-4'>
                                <h1 className='font-semibold text-xl mb-4'>{blog.title}</h1>
                                <p className='text-[#949394]'>
                                    {blog.desc}
                                </p>
                                <Link className='flex items-center gap-1 mt-4 text-[#a1c058] font-medium'>Learn More <span><FaAngleRight /></span></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default OurBlog;