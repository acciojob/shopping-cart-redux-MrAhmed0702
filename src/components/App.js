import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h3 className="text-center">Shopping Cart App</h3>

        <div className="container mt-4">
          <ProductList />
          <Cart />
          <Wishlist />
        </div>
      </div>
    </Provider>
  );
};

export default App;
