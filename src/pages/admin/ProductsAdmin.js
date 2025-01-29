import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../admin/Adminaccount.css";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const backendURL = process.env.REACT_APP_BACKEND_URL;

  // Fetch all products
  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(`${backendURL}/api/products`);
      setProducts(response.data);
    } catch (err) {
      setError("Failed to load products.");
    }
  }, [backendURL]);

  // Handle Edit button click
  const handleEdit = (id) => {
    navigate(`/admin/dashboard/products/${id}`);
  };

  // Handle Delete button click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${backendURL}/api/products/${id}`);
        setProducts(products.filter((product) => product.id !== id));
      } catch (err) {
        setError("Failed to delete the product.");
      }
    }
  };

  // Navigate to Add Product page
  const handleAddProduct = () => {
    navigate("/admin/dashboard/products/add");
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="admin-articles">
      <h1>Products</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="articles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <img
                  src={product.image || "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg"}
                  alt={`Thumbnail for ${product.name}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="edit-delete-buttons">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddProduct} className="add-article-button">
        Add a Product
      </button>
    </div>
  );
};

export default ProductsAdmin;
