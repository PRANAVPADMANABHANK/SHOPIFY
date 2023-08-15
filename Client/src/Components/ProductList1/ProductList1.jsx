import React from "react";
import "./ProductList1.css";

const ProductList1 = ({ data, dataSetName }) => {
  console.table(data, `Data for ${dataSetName}`);

  // Extract _id values from each item in the array
  const ids = data.map((item) => item._id);

  console.table(data, `Data for ${dataSetName}`);

  const arr = ids.includes(1 && 2 && 3 && 4 && 5);

  // console.log(dataSetName,"data.orders2")
  const products = data.flatMap((item) => item.popularProducts);

  return (
    <>
      <h2>
        {dataSetName === "orders"
          ? "Most Popular Products"
          : arr === true
          ? "This Customer has Ordered all Products Including Inexpensive Product"
          : "Ordered Products Including Inexpensive Product"}
      </h2>
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
    </>
  );
};

export default ProductList1;
