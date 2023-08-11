import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">SHOPIFY</h1>
        <div className="nav-links">
          <span>PopularProducts</span>
          <span>Customers</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
