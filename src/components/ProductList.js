import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products";
import { addToCart, addToWishlist } from "../redux/actions";

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="row mt-4">
      {products.map((p) => (
        <div key={p.id} className="col-md-3">
          <div className="custom-card card mb-3">
            <img src={p.image} className="card-img-top" />
            <div className="card-body">
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <p>Rs {p.price}</p>

              <button
                className="btn btn-primary mb-2"
                onClick={() => dispatch(addToCart(p))}
              >
                Add To Cart
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => dispatch(addToWishlist(p))}
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
