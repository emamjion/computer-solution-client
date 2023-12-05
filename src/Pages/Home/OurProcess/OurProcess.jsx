import React from 'react';

const OurProcess = () => {
    return (
        <div className='py-8 md:py-24 md:px-10 px-7 md:mx-[240px] md:flex'>
            <div className='md:w-1/2' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='bg-[#fff] border shadow-md p-4 md:w-[600px] rounded flex items-center gap-3'>
                    <span className='text-4xl text-[#a1c058] font-medium'>01</span>
                    <div>
                        <h1 className='font-semibold text-lg'>Make Appointment</h1>
                        <p className='text-[#939493]'>
                            Schedule your service with ease today.
                        </p>
                    </div>
                </div>
                <div className='bg-[#fff] border shadow-md p-4 md:w-[600px] rounded mt-6 flex items-center gap-3'>
                    <span className='text-4xl text-[#a1c058] font-medium'>02</span>
                    <div>
                        <h1 className='font-semibold text-lg'>We Arrive Within 1 Hour</h1>
                        <p className='text-[#939493]'>
                            We'll be there when expected.
                        </p>
                    </div>
                </div>
                <div className='bg-[#fff] border shadow-md p-4 md:w-[600px] rounded mt-6 flex items-center gap-3'>
                    <span className='text-4xl text-[#a1c058] font-medium'>03</span>
                    <div>
                        <h1 className='font-semibold text-lg'>Solve Your Problem</h1>
                        <p className='text-[#939493]'>
                            We solve problems with expert precision.
                        </p>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 mt-12 md:mt-0 lg:mt-0' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h3 className='text-xl font-medium mb-3 text-[#a1c058]'>Our Process</h3>
                <h1 className='text-3xl font-bold mb-4'>How We Work<span className='text-[#a1c058]'>.</span></h1>
                <p className='md:w-[600px] text-[#939493]'>
                    Our process begins with a thorough assessment of the issue, ensuring we understand the root cause. Next, our expert team devises a tailored solution to address the specific problem.
                </p>
                <p className='md:w-[600px] mt-3 text-[#939493]'>
                    We then implement the solution with precision, keeping you informed at every step. Our commitment is to deliver efficient and effective results, making your experience with us seamless and satisfying.
                </p>
                <div className='flex items-center gap-10 mt-4'>
                    <div>
                        <p className='text-[#a1c058] text-3xl font-medium'><span>6</span>K+</p>
                        <h1 className='text-[#939493]'>Happy Clients</h1>
                    </div>
                    <div>
                        <p className='text-[#a1c058] text-3xl font-medium'><span>4</span>K+</p>
                        <h1 className='text-[#939493]'>Active Members</h1>
                    </div>
                    <div>
                        <p className='text-[#a1c058] text-3xl font-medium'><span>5</span>+</p>
                        <h1 className='text-[#939493]'>Years Experience</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;