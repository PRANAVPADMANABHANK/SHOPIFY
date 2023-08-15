import React, { useState } from 'react';
import './PopularProducts.css';
import ProductList1 from '../ProductList1/ProductList1';
import axios from 'axios';

const PopularProducts = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [fetchedData, setFetchedData] = useState(null); // State to store fetched data

  // Function to select an item
  const selectItem = async (itemId) => {
    setSelectedItem(itemId);
    // console.log(itemId, ']]]]]]');
    
    try {
      const response = await axios.get(`http://localhost:8800/api/orders/${itemId}`);
      // console.log(response.data, 'Response status:');
      setFetchedData(response.data); // Update the state with fetched data
      
    } catch (error) {
      console.error('Error fetching most popular product:', error);
    }
  };

  // Sample product data
  const products = [
    { id: 'user1', name: 'User 1' },
    { id: 'user2', name: 'User 2' },
    { id: 'user3', name: 'User 3' },
    { id: 'user4', name: 'User 4' },
    { id: 'user5', name: 'User 5' },
  ];

  return (
    <>
    <div className="popular-products">
      {products.map((product) => (
        <div
          key={product.id}
          className={`product-item ${selectedItem === product.id ? 'selected' : ''}`}
          onClick={() => selectItem(product.id)}
        >
          {product.name}
        </div>
      ))}
    </div>
    {fetchedData && (
  <>
    <ProductList1 data={fetchedData.orders} dataSetName="orders" />
    <ProductList1 data={fetchedData.orders2} dataSetName="orders2" />
  </>
)}      </>
  );
};

export default PopularProducts;
