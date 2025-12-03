import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from "./actions";

const initialState = {
  cart: [],
  wishlist: []
};

// Helper functions for better performance (optional for large lists)
const getCartItemIds = (cart) => new Set(cart.map(item => item.id));
const getWishlistItemIds = (wishlist) => new Set(wishlist.map(item => item.id));

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // Use Set to check existence (more efficient for large lists)
      if (getCartItemIds(state.cart).has(action.payload.id)) return state;
      return { 
        ...state, 
        cart: [...state.cart, { ...action.payload, qty: 1 }] 
      };

    case REMOVE_FROM_CART:
      return { 
        ...state, 
        cart: state.cart.filter(p => p.id !== action.payload) 
      };

    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        )
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
          )
          .filter(item => item.qty > 0)
      };

    case ADD_TO_WISHLIST:
      // Use Set to check existence (more efficient for large lists)
      if (getWishlistItemIds(state.wishlist).has(action.payload.id)) return state;
      return { 
        ...state, 
        wishlist: [...state.wishlist, action.payload] 
      };

    case REMOVE_FROM_WISHLIST:
      return { 
        ...state, 
        wishlist: state.wishlist.filter(p => p.id !== action.payload) 
      };

    default:
      return state;
  }
}