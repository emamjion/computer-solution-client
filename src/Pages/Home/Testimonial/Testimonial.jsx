import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonial.json').then(res => res.json()).then(data => setTestimonials(data))
    }, [])
    
    return (
        <section className='py-8 md:py-12 md:px-16 px-7 md:mx-[240px] bg-[#f3f3f3]'>
            <div>
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Testimonial</h3>
                <h1 className='text-3xl font-bold'>What Say Our Happy Customers<span className='text-[#a1c058]'>.</span></h1>
            </div>
            <div className='mt-10'>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        testimonials.map(tes => <SwiperSlide
                            key={tes.id}
                            className='p-10 cursor-pointer bg-[#fff]'
                        >
                            <div className='flex items-center justify-center flex-col'>
                                <div className='text-center'>
                                    <img src={tes.image} className='w-full h-full rounded-full' />
                                    <div className='text-center mt-4'>
                                        <h2 className='font-semibold text-2xl'>{tes.name}</h2>
                                        <p className='text-[#949394]'>{tes.profession}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='flex items-center justify-center my-4 text-4xl text-[#a1c058]'>
                                        <FaQuoteLeft />
                                    </span>
                                    <p className='mt-6 text-[#7c7c7c]'>
                                        {tes.speech}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;