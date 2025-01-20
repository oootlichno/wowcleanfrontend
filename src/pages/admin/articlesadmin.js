import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../admin/Adminaccount.css';

const ArticlesAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/articles`);
      setArticles(response.data);
    } catch (err) {
      setError("Failed to load articles.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/articles/${id}`); 
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`);
        setArticles(articles.filter((article) => article.id !== id));
      } catch (err) {
        setError("Failed to delete the article.");
      }
    }
  };

  const handleAddArticle = () => {
    navigate('/admin/dashboard/articles/add'); 
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="admin-articles">
      <h1>Articles</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="articles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </td>
              <td>
                {new Date(article.published_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }).replace(/\//g, '.')}
              </td>
              <td>
                <div className='edit-delete-buttons'>
                <button onClick={() => handleEdit(article.id)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(article.id)} className="delete-button">
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddArticle} className="add-article-button">
        Add an Article
      </button>
    </div>
  );
};

export default ArticlesAdmin;