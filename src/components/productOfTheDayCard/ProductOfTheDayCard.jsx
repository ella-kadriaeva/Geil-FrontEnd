import React from "react";
import "./ProductOfTheDayCard.module.scss";


const ProductOfTheDayCard = ({ title, image, discountPrice, originalPrice }) => {
  return (
    <div className="product-of-the-day-card">
      <h3 className="product-title">{title}</h3>
      <img src={image} alt={title} className="product-image" />
      
      <div className="price-container">
        <span className="discount-price">${discountPrice}</span>
        <span className="original-price">${originalPrice}</span>
      </div>

      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductOfTheDayCard;

