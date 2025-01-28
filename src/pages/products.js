import React, { useState, useEffect } from "react";
import axios from "axios";
import backendURL from "../components/config";
import shape from "../img/Shape.png";


const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
  <div class="shape-container">
  <img src={shape} alt="Background Shape" className="shape-image"/>
</div>
<div className="product-container">
       <h1 className="products-title">Nasze Artykuly</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.image} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price-container">
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;