import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, addToCart } from "../redux/actions";

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map(item => (
        <div key={item.id} className="wishlist-row">
          <h3>{item.title}</h3>

          <button onClick={() => dispatch(addToCart(item))}>
            Add To Cart
          </button>

          <button onClick={() => dispatch(removeFromWishlist(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
