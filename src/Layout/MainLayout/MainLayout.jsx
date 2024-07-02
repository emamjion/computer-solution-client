import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Home/Footer/Footer';
import Header from '../../Pages/Home/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;