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
      setLatestArticles(response.data.slice(0, 5)); 
    };

    fetchArticle();
    fetchLatestArticles();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="one-article-page">
    <div className="article-content">
      <h1 className="article-title">{article.title}</h1>
      <img className="article-image" src={article.image} alt={article.title} />
      <div className="article-text" dangerouslySetInnerHTML={{ __html: article.text }}></div>
      <p className="article-meta">Published on: {article.published_date}</p>
    </div>
    <div className="latest-articles">
      <h2>Latest Posts</h2>
      <ul>
        {latestArticles.map((latest) => (
          <li key={latest.id}>
            <Link to={`/articles/${latest.id}`}>
            <img src={latest.image} alt={latest.title} />
            <div>
              <h3>{latest.title}</h3>
              <p>{latest.published_date}</p>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default OneArticlePage;