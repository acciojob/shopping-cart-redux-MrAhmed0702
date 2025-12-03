import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <h3>Cart</h3>
      {cart.map((item) => (
        <div key={item.id} className="card mb-2">
          <div className="card-body">
            <h4>{item.title}</h4>
            <p>Qty: {item.qty}</p>

            <button
              className="btn btn-success mr-2 increase-btn"
              onClick={() => dispatch(increaseQty(item.id))}
              data-cy="increase-btn"
            >
              +
            </button>

            <button
              className="btn btn-warning mr-2 decrease-btn"
              onClick={() => dispatch(decreaseQty(item.id))}
              data-cy="decrease-btn"
            >
              -
            </button>

            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeFromCart(item.id))}
              data-cy="remove-btn"
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
