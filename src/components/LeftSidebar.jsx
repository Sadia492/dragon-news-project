import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftSidebar() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);

  return (
    <div>
      <p>All Category</p>
      <div className="flex flex-col">
        {category.map((item) => (
          <NavLink
            to={`/category/${item.category_id}`} // Define the path for each category
            className={({ isActive }) =>
              isActive ? "btn bg-gray-400 text-black" : "btn"
            }
            key={item.category_id}
          >
            {item.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
