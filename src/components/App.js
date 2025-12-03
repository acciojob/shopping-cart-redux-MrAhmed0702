import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";
import { setProducts } from "../redux/actions";

const FetchWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <div>
      {/* Do not remove main div */}
      <h1>Shopping Cart</h1>
      <ProductList />
      <Coupon />
      <Cart />
      <Wishlist />
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <FetchWrapper />
    </Provider>
  );
}
