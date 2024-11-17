import React from "react";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="card w-full bg-base-100 hover:shadow-xl">
      <div className="grid gap-2">
        {/* Author Information */}
        <div className="flex items-center p-4 mb-4 bg-gray-100 rounded-t-lg">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h4 className="font-semibold">{news.author.name}</h4>
            <p className="text-sm text-gray-500">{news.author.published_date}</p>
          </div>
          <div className="ml-auto">
            <button className="btn btn-sm btn-ghost">
              <FaShareAlt className="text-gray-500 text-lg" />
            </button>
          </div>
        </div>

        {/* News Title */}
        <h2 className="card-title px-4">{news.title}</h2>

        {/* Thumbnail Image */}
        <figure className="my-4 px-4">
          <img
            src={news.thumbnail_url}
            alt={news.title}
            className="rounded-lg"
          />
        </figure>

        {/* News Details */}
        <p className="text-sm text-gray-600 px-4">
          {news.details.slice(0, 150)}...
          <Link to={`/news/${news._id}`} className="btn btn-link btn-xs text-primary">Read More</Link>
        </p>

        {/* Ratings and Views */}
        <div className="flex justify-between items-center mt-4 px-4 pb-4">
          {/* Rating */}
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <span className="ml-2 text-sm font-medium">{news.rating.number}</span>
            <span className="ml-2 text-sm text-gray-500">
              ({news.rating.badge})
            </span>
          </div>

          {/* Total Views */}
          <div className="flex items-center text-sm text-gray-500 ">
            <FaEye className="mr-1" />
            {news.total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
