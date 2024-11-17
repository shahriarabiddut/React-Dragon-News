import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className="logo">
             <Link to={'/'}> <img className='w-[300px]' src={logo} alt="" /> </Link> 
            </div>
            <h2 className="text-gray-400 ">Journalism Without Fear or Favour</h2>
            <p>{moment().format('MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;