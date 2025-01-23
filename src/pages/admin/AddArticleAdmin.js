/* import React, { useState } from 'react';
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
    <div className="add-article-container">
      <h1>Add New Article</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAdd} className="add-article-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
            placeholder="Enter the article title"
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={article.image}
            onChange={(e) => setArticle({ ...article, image: e.target.value })}
            placeholder="Enter the image URL"
          />
        </div>
        <div className="form-group">
          <label>Text:</label>
          <textarea
            value={article.text}
            onChange={(e) => setArticle({ ...article, text: e.target.value })}
            placeholder="Enter the article text"
            rows="5"
          />
        </div>
        <div className="form-group">
          <label>Published Date:</label>
          <input
            type="date"
            value={article.published_date}
            onChange={(e) => setArticle({ ...article, published_date: e.target.value })}
          />
        </div>
        <button type="submit" className="add-button">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticleAdmin; */


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const AddArticleAdmin = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: '', text: '', published_date: '' });
  const [image, setImage] = useState(null); // Separate state for the image file
  const [error, setError] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('title', article.title);
      formData.append('text', article.text);
      formData.append('published_date', article.published_date);
      if (image) {
        formData.append('image', image); // Append the image file
      }

      // Send the request to the backend
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/articles`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the content type is set properly
        },
      });

      alert('Article added successfully!');
      navigate('/admin/dashboard/articles');
    } catch (err) {
      setError('Failed to add the article.');
    }
  };

  return (
    <div className="add-article-container">
      <h1>Add New Article</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAdd} className="add-article-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
            placeholder="Enter the article title"
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])} // Capture the file
            accept="image/*"
          />
        </div>
        <div className="form-group">
          <label>Text:</label>
          <textarea
            value={article.text}
            onChange={(e) => setArticle({ ...article, text: e.target.value })}
            placeholder="Enter the article text"
            rows="5"
            required
          />
        </div>
        <div className="form-group">
          <label>Published Date:</label>
          <input
            type="date"
            value={article.published_date}
            onChange={(e) => setArticle({ ...article, published_date: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="add-button">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticleAdmin;

