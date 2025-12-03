import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromWishlist } from "../redux/actions";

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Wishlist</h2>

      {wishlist.map(item => (
        <div key={item.id} className="row my-2 p-2 border">
          <div className="col">
            <h4>{item.title}</h4>

            <button className="btn btn-primary"
              onClick={() => dispatch(addToCart(item))}
            >
              Add To Cart
            </button>

            <button className="btn btn-danger mx-2"
              onClick={() => dispatch(removeFromWishlist(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
