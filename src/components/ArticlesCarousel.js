import React from "react";
import { Link } from "react-router-dom";

const ArticlesCarousel = ({ articles }) => {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 10);

  const scrollLeft = () => {
    document.getElementById("carousel-container").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("carousel-container").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="articles-carousel">
      <h2 className="carousel-title">Recent Articles</h2>
      <p className="article-about">Here’s what we've been up to recently.</p>
  {/*     <div className="carousel-controls">
        <button className="carousel-btn left" onClick={scrollLeft}>
          ←
        </button>
        <button className="carousel-btn right" onClick={scrollRight}>
          →
        </button>
      </div> */}
      <div id="carousel-container" className="carousel-container">
        {latestArticles.map((article) => (
          <div className="carousel-article-card" key={article.id}>
            <img
              src={article.image}
              alt={article.title}
              className="carousel-articles-image"
            />
                 <div className="carousel-articles-meta">
                {new Date(article.published_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            <div className="carousel-article-content">
         
              <div className="carousel-articles-title">{article.title}</div>
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

export default ArticlesCarousel;