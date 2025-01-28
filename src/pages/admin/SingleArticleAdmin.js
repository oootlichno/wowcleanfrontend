import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';
import TextEditor from '../admin/TextEditor';

const SingleArticleAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: '',
    image: '',
    text: '',
    published_date: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const fetchArticle = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`);
      setArticle(response.data);
    } catch (err) {
      setError('Failed to fetch the article.');
    }
  }, [id]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!article.title || !article.text || !article.published_date) {
      setError('All fields are required');
      return;
    }

    try {
      let imageUrl = article.image;

      if (selectedFile) {
        try {
          const formData = new FormData();
          formData.append('file', selectedFile);
          formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
          const uploadRes = await axios.post(
            `https://api.cloudinary.com/v1_1/ds7x1z5jb/image/upload`,
            formData
          );
          imageUrl = uploadRes.data.secure_url;
        } catch (uploadErr) {
          setError('Image upload failed.');
          return;
        }
      }

      const updatedArticle = {
        title: article.title,
        text: article.text,
        published_date: article.published_date,
        image: imageUrl,
      };

      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`, updatedArticle);
      alert('Article updated successfully!');
      navigate('/admin/dashboard/articles');
    } catch (err) {
      setError('Failed to update the article.');
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

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

        <label>Current Image:</label>
        {article.image ? (
          <img
            src={article.image}
            alt="Current"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        ) : (
          <p>No image uploaded</p>
        )}

        <label>Upload New Image:</label>
        <input type="file" onChange={handleFileChange} />

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


