import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const AddArticleAdmin = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: '', text: '', published_date: '' });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setError(''); 
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!article.title || !article.text || !article.published_date) {
      setError("All fields are required.");
      return;
    }

    try {
      let imageUrl = null;

      if (image) {
        try {
          const formData = new FormData();
          formData.append('file', image);
          formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

          const uploadRes = await axios.post(
            `https://api.cloudinary.com/v1_1/ds7x1z5jb/image/upload`,
            formData
          );

          imageUrl = uploadRes.data.secure_url;
        } catch (err) {
          setError("Failed to upload the image.");
          return;
        }
      }

      const articleData = {
        title: article.title,
        text: article.text,
        published_date: article.published_date,
        image: imageUrl,
      };

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/articles`, articleData);

      alert('Article added successfully!');
      setArticle({ title: '', text: '', published_date: '' }); // Clear form
      setImage(null);
      navigate('/admin/dashboard/articles');
    } catch (err) {
      setError('Failed to add the article. Please try again later.');
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
            onChange={handleImageChange}
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


