import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const SingleProductAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      setError('Failed to fetch the product.');
    }
  }, [id]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!product.name || !product.description || !product.price || !product.stock) {
      setError("All fields are required.");
      return;
    }

    try {
      let imageUrl = product.image;

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
          setError("Image upload failed.");
          return;
        }
      }

      const updatedProduct = {
        ...product,
        image: imageUrl,
        price: parseFloat(product.price),
        stock: parseInt(product.stock, 10),
      };

      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`, updatedProduct);
      alert('Product updated successfully!');
      navigate('/admin/dashboard/products');
    } catch (err) {
      setError('Failed to update the product.');
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className="single-article-admin">
      <h1>Edit Product</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />

        <label>Current Image:</label>
        {product.image ? (
          <img src={product.image} alt="Current" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        ) : (
          <p>No image uploaded</p>
        )}

        <label>Upload New Image:</label>
        <input type="file" onChange={handleFileChange} />

        <label>Description:</label>
        <textarea value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />

        <label>Price:</label>
        <input type="number" step="0.01" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />

        <label>Stock:</label>
        <input type="number" value={product.stock} onChange={(e) => setProduct({ ...product, stock: e.target.value })} />

        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default SingleProductAdmin;
