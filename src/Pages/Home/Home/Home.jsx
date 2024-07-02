import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import ChooseUs from '../ChooseUs/ChooseUs';
import HomeService from '../HomeService/HomeService';
import OurBlog from '../OurBlog/OurBlog';
import OurProcess from '../OurProcess/OurProcess';
import OurTeam from '../OurTeam/OurTeam';
import Testimonial from '../Testimonial/Testimonial';
import WatchVideo from '../WatchVideo/WatchVideo';
import WhoWe from '../WhoWe/WhoWe';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <WhoWe/>
            <HomeService/>
            <OurProcess/>
            <WatchVideo/>
            <OurTeam/>
            <ChooseUs/>
            <Testimonial/>
            <OurBlog/>
        </div>
    );
};

export default Home;