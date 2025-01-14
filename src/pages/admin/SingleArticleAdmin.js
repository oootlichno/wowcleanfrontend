import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';
import TextEditor from '../admin/TextEditor';

const SingleArticleAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: '', image: '', text: '', published_date: '' });
  const [error, setError] = useState('');

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`);
      setArticle(response.data);
    } catch (err) {
      setError('Failed to fetch the article.');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`, article);
      alert('Article updated successfully!');
      navigate('/admin/dashboard/articles');
    } catch (err) {
      setError('Failed to update the article.');
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div className="single-article-admin">
      <h1>Edit Article</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleUpdate}>
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
        <TextEditor
          value={article.text}
          onChange={(newText) => setArticle({ ...article, text: newText })}
        />

        <label>Published Date:</label>
        <input
          type="date"
          value={article.published_date}
          onChange={(e) => setArticle({ ...article, published_date: e.target.value })}
        />

        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default SingleArticleAdmin;