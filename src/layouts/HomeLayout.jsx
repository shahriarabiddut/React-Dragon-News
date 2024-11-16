import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layoutComponent/LeftNavbar';
import RightNavbar from '../components/layoutComponent/RightNavbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <LatestNews/>
                <Navbar/>
            </header>
            <main className='w-10/12 mx-auto mt-5 grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            </main>
            <footer><Footer/></footer>
        </div>
    );
};

export default HomeLayout;