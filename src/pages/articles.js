import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";
import shape from "../img/Shape.png";
import ArticlesCarousel from "../components/ArticlesCarousel";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/articles`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="articles-page">
      <div className="shape-container">
        <img src={shape} alt="Background Shape" className="shape-image" />
      </div>
      <ArticlesCarousel articles={articles} />
      <div className="services-title-page">All Articles</div>
      <p className="article-about">Fresh ideas for a cleaner life! Explore trends, tips, and stories from our team, blending expertise and inspiration to keep your spaces spotless.</p>
      <div className="recent-articles-grid">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <img
              src={article.image}
              alt={article.title}
              className="articles-image"
            />
            <div className="r-article-content">
              <div className="articles-meta">
                {new Date(article.published_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
              <div className="articles-title">{article.title}</div>
              <Link to={`/articles/${article.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
