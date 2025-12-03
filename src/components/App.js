import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* Do not remove the main div */}
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="text-center w-100">Shopping Cart</h1>
        </nav>

        <ProductList />
        <Coupon />
        <Cart />
        <Wishlist />
      </div>
    </Provider>
  );
};

export default App;
