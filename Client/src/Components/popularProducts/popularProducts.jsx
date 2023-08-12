import React, { useState } from 'react';
import './PopularProducts.css'; // Import your CSS file
import newRequest from '../../utils/newRequest';

const PopularProducts = () => {
  const [selectedItem, setSelectedItem] = useState('');

  // Function to select an item
  const selectItem = async (itemId) => {
    setSelectedItem(itemId);
    console.log(itemId,"]]]]]]")
    try {
      const res = await fetch(newRequest(`/orders/${itemId}`));
      console.log('Response status:', res.status);
      
      console.log(res,"[[[[[["); // Handle the fetched data
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
  );
};

export default PopularProducts;
