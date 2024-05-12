import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import './ProductGrid.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);

        // Extract unique categories from products
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on category
  const getProductsByCategory = () => {
    let filteredProducts = products;
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    return filteredProducts;
  };

  // Sort products based on price
  const sortProducts = (products) => {
    if (sortOrder === 'asc') {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      return products.slice().sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  // Handle category selection change
  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  // Handle sort order change
  const handleSortOrderChange = event => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="product-grid-container">
      <div className='text-container'>
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>Lorem ipsum dolor sit consectetur. Amet est posuere rhoncus sceleriaque. <br/> Dolor integer sceleriaque nibh amet mi ut elementum dolor.</p>
      </div>
      <hr />
      <div className='filter-sort-container'>
        <div className="sidebar">
          <h3>CATEGORIES</h3>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="sidebar">
          <h3>RECOMMENDED</h3>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="">All</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {sortProducts(getProductsByCategory()).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
