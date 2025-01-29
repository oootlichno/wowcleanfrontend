import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const AddProductAdmin = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', description: '', price: '', stock: '' });
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

    if (!product.name || !product.description || !product.price || !product.stock) {
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

      const productData = {
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        stock: parseInt(product.stock, 10),
        image: imageUrl,
      };

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products`, productData);

      alert('Product added successfully!');
      setProduct({ name: '', description: '', price: '', stock: '' });
      setImage(null);
      navigate('/admin/dashboard/products');
    } catch (err) {
      setError('Failed to add the product. Please try again later.');
    }
  };

  return (
    <div className="add-article-container">
      <h1>Add New Product</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAdd} className="add-article-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            placeholder="Enter product description"
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
            placeholder="Enter stock quantity"
            required
          />
        </div>
        <button type="submit" className="add-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductAdmin;
