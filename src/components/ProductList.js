import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products";
import { addToCart, addToWishlist } from "../redux/actions";

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">

      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="custom-card card">
              <img src={product.image} className="card-img-top" />

              <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p>Rs {product.price}</p>

                <button className="btn btn-primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add To Cart
                </button>

                <button className="btn btn-secondary ml-2"
                  onClick={() => dispatch(addToWishlist(product))}
                >
                  Wishlist
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductList;