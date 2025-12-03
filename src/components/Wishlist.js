import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, addToCart } from "../redux/actions";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  if (wishlist.length === 0) {
    return (
      <div className="mt-5">
        <h3>Wishlist</h3>
        <p>Your wishlist is empty. Start adding items!</p>
      </div>
    );
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="mt-5">
      <h3>Wishlist</h3>

      {wishlist.map((item) => (
        <div key={item.id} className="card mb-2">
          <div className="card-body">
            <h4>{item.title}</h4>

            <button
              className="btn btn-primary mr-2"
              onClick={() => handleAddToCart(item)}
              data-cy={`add-to-cart-btn-${item.id}`}
              aria-label={`Add ${item.title} to cart`}
            >
              Add To Cart
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFromWishlist(item.id)}
              data-cy={`remove-from-wishlist-btn-${item.id}`}
              aria-label={`Remove ${item.title} from wishlist`}
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
