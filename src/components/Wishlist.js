import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, addToCart } from "../redux/actions";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <h3>Wishlist</h3>

      {wishlist.map((item) => (
        <div key={item.id} className="card mb-2">
          <div className="card-body">
            <h4>{item.title}</h4>

            <button
              className="btn btn-primary mr-2"
              onClick={() => dispatch(addToCart(item))}
            >
              Add To Cart
            </button>

            <button
              className="btn btn-danger"
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
