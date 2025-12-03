import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../redux/actions";

const Coupon = () => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Apply Coupon</h2>

      <input
        type="text"
        className="form-control w-50"
        placeholder="Enter code (SAVE10 / SAVE20)"
        value={code}
        onChange={e => setCode(e.target.value)}
      />

      <button className="btn btn-dark mt-2"
        onClick={() => dispatch(applyCoupon(code))}
      >
        Apply
      </button>
    </div>
  );
};

export default Coupon;
