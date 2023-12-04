import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import WhoWe from '../WhoWe/WhoWe';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <WhoWe/>
            <HomeService/>
        </div>
    );
};

export default Home;