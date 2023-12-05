import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import WhoWe from '../WhoWe/WhoWe';
import HomeService from '../HomeService/HomeService';
import OurProcess from '../OurProcess/OurProcess';
import OurTeam from '../OurTeam/OurTeam';
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonial from '../Testimonial/Testimonial';
import OurBlog from '../OurBlog/OurBlog';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <WhoWe/>
            <HomeService/>
            <OurProcess/>
            <OurTeam/>
            <ChooseUs/>
            <Testimonial/>
            <OurBlog/>
        </div>
    );
};

export default Home;