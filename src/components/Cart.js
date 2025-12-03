import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/actions";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const discount = useSelector(state => state.discount);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const finalTotal = total - (total * discount) / 100;

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-row">
          <h3>{item.title}</h3>
          <p>Price: Rs {item.price}</p>
          <p>Qty: {item.qty}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: Rs {finalTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
