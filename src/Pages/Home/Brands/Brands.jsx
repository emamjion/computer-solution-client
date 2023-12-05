import React from 'react';
import acer from '../../../assets/images/brands/acer.png';
import apple from '../../../assets/images/brands/apple.png';
import intel from '../../../assets/images/brands/intel.png';
import asus from '../../../assets/images/brands/asus.png';
import lenevo from '../../../assets/images/brands/lenevo.png';

const Brands = () => {
    return (
        <section className='md:flex items-center justify-between py-8 md:py-24 md:px-10 px-7 md:mx-[240px] gap-10'>
            <div className='md:flex items-center gap-6'>
                <div className='md:w-56' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h1 className='text-lg font-medium text-center md:text-left'>We work with some of the world's best brands</h1>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <img src={acer} className='md:w-52' />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <img src={apple} className='md:w-52' />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <img src={intel} className='md:w-52' />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <img src={asus} className='md:w-52' />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <img src={lenevo} className='md:w-52' />
                </div>
            </div>
        </section>
    );
};

export default Brands;