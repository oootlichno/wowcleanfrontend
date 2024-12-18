import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";


const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(`${backendURL}/api/articles`);
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="articles-page">
{/*       <h1 className="page-title">Latest Articles</h1>
 */}      <div className="articles-grid">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <img src={article.image} alt={article.title} className="article-image" />
            <h2 className="articles-title">{article.title}</h2>
            <p className="article-text">
              {article.text.length > 100
                ? `${article.text.substring(0, 100)}...`
                : article.text}
            </p>
            <Link to={`/articles/${article.id}`} className="read-more-btn">
              Read More
            </Link>
            <p className="article-meta">
              Published on: {new Date(article.published_date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;