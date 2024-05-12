import React from 'react';
import { useState } from 'react';

import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Example of local state for handling user interactions
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2 className='products-title'>{product.title}</h2>
      <div className='product-price'>
        <p>${product.price}</p>
        <button className={liked ? 'liked' : ''} onClick={handleLike}>
          <span role="img" aria-label="heart">{liked ? '❤️' : '♡'}</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
