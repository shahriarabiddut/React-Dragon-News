import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RightNavbar from '../components/layoutComponent/RightNavbar';

const NewsDetails = () => {
    const news = useLoaderData();
    const data = (news.data[0]);
    return (
        <div>
            <header><Header/></header>
            <main className='w-10/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className="font-semibold mb-3">Daragon News </h2>
                    <div className="card card-compact bg-base-100 shadow-xl p-5">
                        <figure>
                            <img
                            src={data?.image_url}
                            alt={data?.title}
                            className='p-5'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{data?.title}</h2>
                            <p className='text-justify'>{data?.details}</p>
                            <div className="card-actions justify-end">
                            <Link to={`/category/${parseInt(data?.category_id, 10)}`} className="btn btn-primary"> <FaArrowLeft></FaArrowLeft> Back to Category </Link>
                            </div>
                        </div>
                        </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default NewsDetails;