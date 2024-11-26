import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductCard/ProductList";
import React from "react";

const products = [
  { id: 1, title: "Product 1", price: 10 },
  { id: 2, title: "Product 2", price: 20 },
  { id: 3, title: "Product 3", price: 30 },
];

const ProductPage = () => {
  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
