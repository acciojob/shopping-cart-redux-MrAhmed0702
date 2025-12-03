// ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/actions';
import { products } from '../data/products';  // Assuming this is where product data is stored

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h5>{product.name}</h5>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart">Add to Cart</button>
          <button onClick={() => handleAddToWishlist(product)} className="add-to-wishlist">Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
