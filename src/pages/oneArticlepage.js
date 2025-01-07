import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";

const OneArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(`${backendURL}/api/articles/${id}`);
      setArticle(response.data);
    };

    const fetchLatestArticles = async () => {
      const response = await axios.get(`${backendURL}/api/articles`);
      setLatestArticles(response.data.slice(0, 3)); // Limit to 3 articles for the sidebar
    };

    fetchArticle();
    fetchLatestArticles();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="one-article-page">

      {/* Main Image Content */}
<div className="img-article-content">
  <img className="article-image" src={article.image} alt={article.title} />
  <div className="gradient-overlay"></div>
  <div className="article-header">

     {/* Path (Breadcrumbs) */}
     <nav className="breadcrumbs">
      <span>Articles</span> &nbsp;—&nbsp;
      <span>Recent Articles</span> &nbsp;—&nbsp;
      <span>{article.title}</span>
    </nav>
    
    {/* Back Button */}
    <Link to="/articles" className="back-link">
      ← Back
    </Link>
  </div>
  {/* Title */}
  <h1 className="article-title">{article.title}</h1>
</div>
      {/* Main Text Content */}
      <div className="text-article-content">
  {/* Article Main Content */}
  <div className="article-main">
    <p className="article-meta">
      Published on{" "}
      {new Date(article.published_date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
    </p>
    <div
      className="article-text"
      dangerouslySetInnerHTML={{ __html: article.text }}
    ></div>
  </div>

  {/* Latest Articles */}
  <aside className="latest-articles">
  <h2 className="latest-articles-title">Latest Posts</h2>
  <ul className="latest-articles-list">
    {latestArticles.map((latest) => (
      <li key={latest.id} className="latest-article-item">
        <Link to={`/articles/${latest.id}`} className="latest-article-link">
        

<div class="latest-article-image-container">
<img
            src={latest.image}
            alt={latest.title}
            className="latest-article-image"
          />
</div>
          <div className="latest-article-info">
          <p className="latest-article-meta">
              Published on{" "}
              {new Date(latest.published_date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h3 className="latest-article-title">{latest.title}</h3>
            <Link
          to={`/articles/${latest.id}`}
          className="latest-article-read-more"
          aria-label={`Read more about ${latest.title}`}
        >
          Read More →
        </Link>
          </div>
        </Link>

      </li>
    ))}
  </ul>
</aside>
</div>

{/* Share to Socials */}
<div className="share-socials">
  <div className="share-label">Share with</div>
  <div className="share-item facebook">
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <i className="fab fa-facebook"></i> SHARE
    </a>
  </div>
  <div className="share-item instagram">
    <a
      href={`https://www.instagram.com/`}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <i className="fab fa-instagram"></i> SHARE
    </a>
  </div>
  <div className="share-item linkedin">
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <i className="fab fa-linkedin"></i> SHARE
    </a>
  </div>
</div>
      </div>
    
  );
};

export default OneArticlePage;




