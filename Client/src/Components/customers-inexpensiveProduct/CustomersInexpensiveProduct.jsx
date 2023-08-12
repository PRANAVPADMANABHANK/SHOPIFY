import React from "react";
import "./CustomersInexpensiveProduct.css";

const CustomersInexpensiveProduct = () => {
  return (
    <div className="table-container">
      <h2>customers who have bought inexpensive items</h2>
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
            <td>user1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>user2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>user3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>user4</td>
            
          </tr>
          <tr>
            <td>5</td>
            <td>user5</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomersInexpensiveProduct;
