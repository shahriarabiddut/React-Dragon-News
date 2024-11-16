import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function FindUs() {
  return (
    <div className='my-5'>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className='join flex join-vertical *:bg-base-100'>
                <button className='btn join-item justify-start text-blue-700'><FaFacebook/> Facebook</button>
                <button className='btn join-item justify-start'><FaXTwitter /> Twitter</button>
                <button className='btn join-item justify-start text-pink-700'><FaInstagram /> Instagram</button>
            </div>
        </div>
  )
}
