import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className='text-container'>
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>Lorem ipsum dolor sit consectetur. Amet est posuere rhoncus sceleriaque. <br/> Dolor integer sceleriaque nibh amet mi ut elementum dolor.</p>
      </div>
      <hr />
      <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductGrid;
