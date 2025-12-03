import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/actions';
import products from '../data/products';  // Correct import

const ProductList = () => {
  const dispatch = useDispatch();

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <p>Price: ${(product.price / 100).toFixed(2)}</p>  {/* Display price in dollars */}
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
