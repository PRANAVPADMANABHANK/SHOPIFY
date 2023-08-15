import React from "react";
import "./ProductList.css";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
  // @tanstack/react-query data fetching
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      newRequest.get(`/products`).then((res) => {
        return res.data;
      }),
  });

  console.log(data);
  return (
    <>
      <h2 style={{textAlign:"center", marginTop:"30px"}}>All Products</h2>
    <section className="container">
      {data?.map((product, key) => {
        return (
          <div className="product-container" key={key}>
            <img src={product?.image} />
            <h1>
              {product.productId} . {product?.productName}
            </h1>
            <h1>&#8377; {product.price}</h1>
          </div>
        );
      })}
    </section>
    </>
  );
};

export default ProductList;
