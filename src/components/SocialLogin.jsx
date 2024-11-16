import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className='my-5'>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className='grid gap-2'>
                <button className='btn'><FaGoogle/> Login With Google</button>
                <button className='btn'><FaGithub/> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;