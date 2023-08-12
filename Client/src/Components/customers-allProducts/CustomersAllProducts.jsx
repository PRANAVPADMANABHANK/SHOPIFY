import React, { useEffect, useState } from "react";
import "./CustomersAllProducts.css";
import CustomersInexpensiveProduct from "../customers-inexpensiveProduct/CustomersInexpensiveProduct";
import newRequest from "../../utils/newRequest";

const CustomersAllProducts = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await newRequest.get("orders/allCustomers"); // Use newRequest here
        console.log("Response:", response);

        // Assuming response.data is an array of customer data
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchInexpensiveData = async () => {
      try {
        const response = await newRequest.get("orders/inexpensive");
        console.log("Inexpensive Response:", response.data);
      } catch (error) {
        console.error("Error fetching inexpensive data:", error);
      }
    };

    fetchInexpensiveData();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
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
