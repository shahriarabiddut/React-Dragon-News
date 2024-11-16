import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] py-2'>
            <header>
                <Navbar/>
            </header>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default AuthLayout;