"use client";
import React from "react";
import "./ProductCard.css";
import { SlBasketLoaded } from "react-icons/sl";

const ProductCard = ({ product }) => {
  const integerPrice = Math.floor(product.price);
  const truncatedTitle =
    product.title.length > 30
      ? product.title.slice(0, 30) + "..."
      : product.title;
  return (
    <div className="product">
      <div className="container">
        <div className="product-card">
          <div className="product-list">
            <img src={product.image} alt="img" />
          </div>
          <div className="product-text">
            <hr />
            <h2 className="product-title">{truncatedTitle}</h2>
            <div className="btn">
              <p className="product-price">Цена: ${integerPrice}</p>
              <button>
                В корзину{" "}
                <span>
                  <SlBasketLoaded />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
