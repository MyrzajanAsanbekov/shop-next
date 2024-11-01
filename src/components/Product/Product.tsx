"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  const productsfetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error, "ошибка");
    }
  };

  useEffect(() => {
    productsfetch();
  }, []);

  return (
    <div id="product">
      <div className="container">
        <div className="product">
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>Цена: {product.price}</p>
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
