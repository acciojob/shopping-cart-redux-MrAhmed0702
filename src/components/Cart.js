import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/actions";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const discount = useSelector(state => state.discount);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const finalTotal = total - (total * discount) / 100;

  return (
    <div className="container mt-4">
      <h2 className="text-start">Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="row my-2 p-2 border">
          <div className="col">
            <h4>{item.title}</h4>
            <p>Price: Rs {item.price}</p>
            <p>Qty: {item.qty}</p>

            <button className="btn btn-success"
              onClick={() => dispatch(increaseQty(item.id))}
            >
              +
            </button>

            <button className="btn btn-warning mx-2"
              onClick={() => dispatch(decreaseQty(item.id))}
            >
              -
            </button>

            <button className="btn btn-danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: Rs {finalTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
