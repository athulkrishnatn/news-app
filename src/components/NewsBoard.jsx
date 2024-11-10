import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles); // Log the articles to inspect
        setArticles(data.articles);
      })
      .catch((error) => console.error("Error fetching data:", error)); // Error handling
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span>News</span>
      </h2>
      <div className="row m-5">
        {articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            src={article.urlToImage || "https://via.placeholder.com/150"} // Fallback image
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
