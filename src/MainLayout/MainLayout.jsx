import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Navber/Navber';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div >
            
            
            <div className='container mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
           
            
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;