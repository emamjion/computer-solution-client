import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './WatchVideo.css';

const WatchVideo = () => {
    const [counterOn, setCounterOn] = useState(false);
    
    return (
        // md:mx-[240px] for container
        <div className='py-8 md:py-24 md:px-10 px-7  md:flex items-center justify-center flex-col watch-bg'> 
            <div className='text-center mb-7'>
                <h3 className='text-[#ACC42E] text-[17px] mb-4'>Watch our computer service video</h3>
                <h1 className='text-[44px] font-semibold text-white'>We're here to help you manage your</h1>
                <h1 className='text-[44px] font-semibold text-white text-center'>problem regular emails that will.</h1>
            </div>
            <ScrollTrigger 
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
            >
                <div className='flex items-center flex-col md:flex-row gap-10'>
                    <div className='border rounded-full w-[190px] h-[190px] flex items-center justify-center flex-col'>
                        <div className='text-[40px] mb-2.5 font-semibold text-white'>
                            {
                                counterOn && (
                                    <CountUp 
                                        start={0} 
                                        end={99} 
                                        duration={3}
                                    >
                                        
                                    </CountUp>
                                )
                            } %
                        </div>
                        <p className='text-white'>Happy Clients</p>
                    </div>
                    <div className='border rounded-full w-[190px] h-[190px] flex items-center justify-center flex-col'>
                        <div className='text-[40px] mb-2.5 font-semibold text-white'>
                            {
                                counterOn && (
                                    <CountUp 
                                        start={0} 
                                        end={275} 
                                        duration={3}
                                    >
                                        
                                    </CountUp>
                                )
                            } 
                        </div>
                        <p className='text-white'>Project Value</p>
                    </div>
                    <div className='border rounded-full w-[190px] h-[190px] flex items-center justify-center flex-col'>
                        <div className='text-[40px] mb-2.5 font-semibold text-white'>
                            {
                                counterOn && (
                                    <CountUp 
                                        start={0} 
                                        end={154} 
                                        duration={3}
                                    >
                                        
                                    </CountUp>
                                )
                            } +
                        </div>
                        <p className='text-white'>Work History</p>
                    </div>
                    <div className='border rounded-full w-[190px] h-[190px] flex items-center justify-center flex-col'>
                        <div className='text-[40px] mb-2.5 font-semibold text-white'>
                            {
                                counterOn && (
                                    <CountUp 
                                        start={0} 
                                        end={374} 
                                        duration={3}
                                    >
                                        
                                    </CountUp>
                                )
                            } +
                        </div>
                        <p className='text-white'>Award Winner</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default WatchVideo;