import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const params = useParams();
    const news = useLoaderData();
    return (
        <div>
            <h2 className="font-semibold mb-3">Daragon News Home</h2>
            <p className="text-gray-400 text-sm">{params.id==0?news.length:news.filter(data=>data.category_id==params.id).length} News Found in this Category!</p>

            <div className='grid gap-3 my-3'>
                {
                   params.id==0?
                    news.map(singleNews=> <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                   :
                    news.filter(data=>data.category_id==params.id).map(singleNews=> <NewsCard key={singleNews._id} news={singleNews}></NewsCard>) 
                }
            </div>
        </div>
    );
};

export default CategoryNews;