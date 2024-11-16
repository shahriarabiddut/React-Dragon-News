import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <section className='w-10/12 mx-auto '>
            <div className='flex gap-2 items-center bg-base-200 p-2'>
                <p className="bg-pink-700 text-base-100 px-3">Latest</p>
                <Marquee pauseOnHover={true} className='font-semibold'>
                    <Link className='mr-2' to='/news'>1Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    <Link className='mr-2' to='/news'>2Lorem  Dolores consectetur officiis vel sed</Link>
                    <Link className='mr-2' to='/news'>3Lorem  ullam harum assumenda tempora tempore?</Link>
                </Marquee>
            </div>
        </section>
    );
};

export default LatestNews;