"use client";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Product fetch error:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
