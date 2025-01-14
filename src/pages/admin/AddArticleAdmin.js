import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const AddArticleAdmin = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: '', image: '', text: '', published_date: '' });
  const [error, setError] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/articles`, article);
      alert('Article added successfully!');
      navigate('/admin/dashboard/articles');
    } catch (err) {
      setError('Failed to add the article.');
    }
  };

  return (
    <div className="add-article-admin">
      <h1>Add New Article</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAdd}>
        <label>Title:</label>
        <input
          type="text"
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={article.image}
          onChange={(e) => setArticle({ ...article, image: e.target.value })}
        />

        <label>Text:</label>
        <textarea
          value={article.text}
          onChange={(e) => setArticle({ ...article, text: e.target.value })}
        />

        <label>Published Date:</label>
        <input
          type="date"
          value={article.published_date}
          onChange={(e) => setArticle({ ...article, published_date: e.target.value })}
        />

        <button type="submit" className="add-button">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticleAdmin;
