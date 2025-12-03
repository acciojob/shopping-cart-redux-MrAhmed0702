import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../redux/actions";

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>All Products</h2>

      {products.length === 0 && <p>Loading...</p>}

      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} width="150" />

            <h3>{product.title}</h3>
            <p>{product.category}</p>

            <h4>Rs {product.price}</h4>

            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>

            <button onClick={() => dispatch(addToWishlist(product))}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
