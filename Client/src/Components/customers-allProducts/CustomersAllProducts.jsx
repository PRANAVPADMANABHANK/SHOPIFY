import React from "react";
import "./CustomersAllProducts.css";
import CustomersInexpensiveProduct from "../customers-inexpensiveProduct/CustomersInexpensiveProduct";

const CustomersAllProducts = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <h2>
        {" "}
        Original records (<i>for referance</i>){" "}
      </h2>

      <div className="table-container">
        <h2>customers who have ordered all products</h2>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>user2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>user3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>user5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
      <CustomersInexpensiveProduct />
    </>
  );
};

export default CustomersAllProducts;
