import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
          <h1 className="logo">SHOPIFY</h1>
        </Link>
        <div className="nav-links">
          <Link to={"/popular"}>
            <span>PopularProducts</span>
          </Link>
          <Link to={"/customer"}>
            <span>Customers</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
