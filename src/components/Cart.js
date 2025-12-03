import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="mt-5">
        <h3>Cart</h3>
        <p>Your cart is empty. Start shopping!</p>
      </div>
    );
  }

  const handleIncrease = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDecrease = (id, qty) => {
    if (qty > 1) {
      dispatch(decreaseQty(id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="mt-5">
      <h3>Cart</h3>
      {cart.map((item) => (
        <div key={item.id} className="card mb-2">
          <div className="card-body">
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.price * item.qty).toFixed(2)}</p>
            <p>Qty: {item.qty}</p>

            <button
              className="btn btn-success mr-2 increase-btn"
              onClick={() => handleIncrease(item.id)}
              data-cy={`increase-btn-${item.id}`}
              aria-label={`Increase quantity of ${item.title}`}
            >
              +
            </button>

            <button
              className="btn btn-warning mr-2 decrease-btn"
              onClick={() => handleDecrease(item.id, item.qty)}
              data-cy={`decrease-btn-${item.id}`}
              aria-label={`Decrease quantity of ${item.title}`}
            >
              -
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleRemove(item.id)}
              data-cy={`remove-btn-${item.id}`}
              aria-label={`Remove ${item.title} from cart`}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
