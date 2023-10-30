import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Navber/Navber';
import Footer from '../Pages/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='bg-[#171717]'>
            
            
            <div className='container mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
           
            
            <Footer></Footer>
            <Toaster></Toaster>
            
        </div>
    );
};

export default MainLayout;