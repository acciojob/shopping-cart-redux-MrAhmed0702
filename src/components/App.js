import React, { useEffect } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/App.css";

const App = () => {
  // If you want to ensure that the app is fully loaded before any interaction
  useEffect(() => {
    // Placeholder for any setup or async actions before rendering
    // You could dispatch some actions here if needed to pre-populate the cart or wishlist
  }, []);

  return (
    <Provider store={store}>
      <div>
        {/* Navbar and title updated for consistency with the test */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3 className="text-center">All Products</h3> {/* Updated text */}
        </nav>

        {/* Container for Products, Cart, and Wishlist */}
        <div className="container mt-4">
          <ProductList /> {/* Ensure this is rendering products correctly */}
          <Cart /> {/* Ensure cart is rendered with products */}
          <Wishlist /> {/* Ensure wishlist is rendered with products */}
        </div>
      </div>
    </Provider>
  );
};

export default App;
