"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addItem } from "@/redux/slices/basketSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ProductList.css";
import { BsCart3 } from "react-icons/bs";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const calculateDiscountPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addItem(product));
    toast.success(`${product.title} корзинага кошулду!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <h1>Продукция</h1>
      <hr />
      {loading ? (
        <div className="loading">Загрузка...</div>
      ) : (
        <div className="product-list">
          {products.map((product) => {
            const discount = 10;
            const discountedPrice = calculateDiscountPrice(
              product.price,
              discount
            );

            return (
              <div key={product.id}>
                <div className="product-card">
                  <img src={product.image} alt={product.title} />
                  <h3>{truncateText(product.title, 20)}</h3>
                  <p>
                    <span>${Math.floor(discountedPrice)}</span>{" "}
                    <span
                      style={{ textDecoration: "line-through", color: "red" }}
                    >
                      ${Math.floor(product.price)}
                    </span>
                  </p>
                  <div className="btn">
                    <button onClick={() => handleAddToCart(product)}>
                      В корзину
                      <span>
                        <BsCart3 />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductList;
