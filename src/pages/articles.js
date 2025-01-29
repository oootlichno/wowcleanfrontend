import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";
import shape from "../img/Shape.png";
import ArticlesCarousel from "../components/ArticlesCarousel";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(9); 
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

  const handleViewAll = () => {
    setVisibleArticles((prevVisible) =>
      prevVisible + 9 > articles.length ? articles.length : prevVisible + 9
    );
  };

  return (
    <div className="articles-page">
      {/* Background Shape */}
      <div className="shape-container">
        <img src={shape} alt="Background Shape" className="shape-image" />
      </div>

      {/* Carousel Section */}
      <ArticlesCarousel articles={articles} />

      {/* All Articles Section */}
      <div className="services-title-page">Wszystkie artykuły</div>
      <p className="article-about">
      Świeże pomysły na czystsze życie! Poznaj trendy, wskazówki i historie od naszego
zespołu, łączącego wiedzę specjalistyczną i inspirację, aby utrzymać Twoje przestrzenie w nieskazitelnej czystości.
      </p>
      <div className="recent-articles-grid">
        {articles.slice(0, visibleArticles).map((article) => (
          <article className="article-card" key={article.id}>
            {/* Article Image */}
            <img
              src={article.image}
              alt={`Thumbnail for ${article.title}`}
              className="articles-image"
            />

            {/* Meta (Date) */}
            <div className="articles-meta">
              {new Date(article.published_date).toLocaleDateString("pl-PL", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>

            {/* Article Content */}
            <div className="r-article-content">
              {/* Title */}
              <header>
                <div className="articles-title">{article.title}</div>
              </header>

              {/* Read More Link */}
              <Link
                to={`/articles/${article.id}`}
                className="read-more"
                aria-label={`Read more about ${article.title}`}
              >
                Przeczytaj więcej →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* "View All" Button */}
      {/* articles.length > 0 */ visibleArticles < articles.length && (
        <div className="view-all-container">
          <button className="view-all-btn" onClick={handleViewAll}>
          Zobacz wszystko →
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;

