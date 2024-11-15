import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function News({ news }) {
  const {
    title,
    author,
    details,
    thumbnail_url,
    image_url,
    rating,
    total_view,
    _id,
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="p-4 flex items-center">
        <img src={author.img} alt="Author" className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <h2 className="text-md font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        <button className="ml-auto text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <div className="px-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <img
          src={image_url}
          alt="Thumbnail"
          className="w-full rounded-lg mt-4"
        />
        <p className="text-sm text-gray-700 mt-4">
          {details.slice(0, 100)}...{" "}
          <Link to={`/news/${_id}`} className="text-blue-500 cursor-pointer">
            Read More
          </Link>
        </p>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex text-yellow-500">
            {Array.from({ length: Math.floor(rating.number) }).map(
              (_, index) => (
                <FaStar key={index} />
              )
            )}
            {rating.number % 1 !== 0 && <FaStar className="half-star" />}
          </div>
          <span className="ml-2 text-gray-600">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaEye className="mr-2" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
