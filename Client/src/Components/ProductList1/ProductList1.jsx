import React from "react";
import "./ProductList1.css";


const ProductList1 = ({ data }) => {
  const products = data.flatMap((item) => item.popularProducts);

  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt={product?.productName} />
          <h1>
            {product.productId} . {product?.productName}
          </h1>
          <h1>&#8377; {product.price}</h1>
        </div>
      ))}
    </section>
  );
};

export default ProductList1;
