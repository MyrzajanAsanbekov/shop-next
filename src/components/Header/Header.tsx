import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>My Store</h1>
          <div className="header-nav">
            <a href="/">Home</a>
            <a href="product">Product</a>
            <a href="">Basket</a>
          </div>
          <div className="header-btn">
            <button>Sign In </button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
