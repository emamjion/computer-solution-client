import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Home/Header/Header';
import Footer from '../../Pages/Home/Footer/Footer';

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