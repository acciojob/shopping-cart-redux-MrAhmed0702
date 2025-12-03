export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const APPLY_COUPON = "APPLY_COUPON";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const increaseQty = (id) => ({
  type: INCREASE_QTY,
  payload: id
});

export const decreaseQty = (id) => ({
  type: DECREASE_QTY,
  payload: id
});

export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item
});

export const removeFromWishlist = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id
});

export const applyCoupon = (code) => ({
  type: APPLY_COUPON,
  payload: code
});
