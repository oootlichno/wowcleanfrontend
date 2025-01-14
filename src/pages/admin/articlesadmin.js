import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/Adminaccount.css';



const ArticlesAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/articles`);
      setArticles(response.data);
    } catch (err) {
      setError("Failed to load articles.");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.content}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesAdmin;