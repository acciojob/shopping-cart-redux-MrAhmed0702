import {
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  APPLY_COUPON
} from "./actions";

const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  discount: 0,
  appliedCoupon: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ADD_TO_CART:
      const exists = state.cart.find(i => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map(i =>
            i.id === exists.id ? { ...i, qty: i.qty + 1 } : i
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== action.payload)
      };

    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        )
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload && i.qty > 1
            ? { ...i, qty: i.qty - 1 }
            : i
        )
      };

    case ADD_TO_WISHLIST:
      if (state.wishlist.find(i => i.id === action.payload.id)) return state;
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(i => i.id !== action.payload)
      };

    case APPLY_COUPON:
      let discount = 0;
      if (action.payload === "SAVE10") discount = 10;
      if (action.payload === "SAVE20") discount = 20;

      return {
        ...state,
        appliedCoupon: action.payload,
        discount
      };

    default:
      return state;
  }
}
