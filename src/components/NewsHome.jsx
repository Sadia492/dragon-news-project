import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import News from "./News";

export default function NewsHome() {
  const [news, setNews] = useState([]);
  const data = useLoaderData();
  //   setNews(data.data);
  return (
    <div>
      {data.data.map((item) => (
        <News news={item} key={item._id}></News>
      ))}
    </div>
  );
}
