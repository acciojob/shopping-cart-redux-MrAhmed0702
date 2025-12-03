import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../redux/actions";

const Coupon = () => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Apply Coupon</h2>

      <input
        type="text"
        placeholder="Enter coupon code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={() => dispatch(applyCoupon(code))}>
        Apply
      </button>
    </div>
  );
};

export default Coupon;
