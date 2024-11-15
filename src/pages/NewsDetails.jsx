import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Sidebar from "../components/RightSidebar";
import Header from "../components/Header";

export default function NewsDetails() {
  const data = useLoaderData();
  const news = data.data[0];
  const {
    title,
    author,
    details,
    thumbnail_url,
    image_url,
    rating,
    total_view,
    _id,
    category_id,
  } = news;
  console.log(news);
  return (
    <div className="w-4/5 mx-auto">
      <div>
        <Header></Header>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-9">
          <h2>Dragon News</h2>
          <div className="p-4 border border-blue-300 rounded-lg shadow-lg  mx-auto">
            {/* News Image */}
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full rounded-lg mb-4"
            />

            {/* News Title */}
            <h2 className="text-2xl font-bold mb-2">{news.title}</h2>

            {/* News Content */}
            <p className="text-gray-700 mb-4">{news.details}</p>

            {/* "All News in this Category" Button */}
            <div className="text-left">
              <Link
                to={`/category/${category_id}`}
                className="btn btn-outline btn-error"
              >
                &larr; All news in this category
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}
