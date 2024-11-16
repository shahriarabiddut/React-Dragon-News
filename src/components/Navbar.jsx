import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const location = useLocation();
    return (
        <section className='w-10/12 mx-auto my-5'>
            <div className='flex justify-between items-center'>
                <div className='font-semibold flex items-center gap-2'>{user && 
                    <>
                    <FaUser></FaUser> {user?.email}
                    </>
                    }</div>
                <div>
                    <nav className='nav space-x-5'>
                        <Link to='/'> Home </Link>
                        <Link to='/auth'> Carrier </Link>
                        <Link to='/auth'> About </Link>
                    </nav>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={userIcon} className='w-10 h-10 rounded-2xl' alt="" />
                    {
                        user && user?.email ? <button onClick={logOut} to={'/auth/login'} className="btn btn-warning">LogOut</button> : ( location.pathname === '/auth/login' ?( <NavLink to={'/auth/register'} className="btn btn-neutral">Register</NavLink>) :( <NavLink to={'/auth/login'} className="btn btn-neutral">Login</NavLink>))
                    }
                    
                </div>
            </div>
            
        </section>
    );
};

export default Navbar;