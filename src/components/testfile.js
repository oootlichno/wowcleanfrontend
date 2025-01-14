import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArticlesAdmin = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/articles`);
        setArticles(response.data);
      } catch (err) {
        console.error('Failed to fetch articles.');
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>
                <button onClick={() => navigate(`/admin/dashboard/articles/${article.id}`)}>
                  Edit
                </button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="add-article-button"
        onClick={() => navigate('/admin/dashboard/articles/add')}
      >
        Add an Article
      </button>
    </div>
  );
};

export default ArticlesAdmin;
