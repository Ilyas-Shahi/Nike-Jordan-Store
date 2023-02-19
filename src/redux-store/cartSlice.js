import { createSlice } from '@reduxjs/toolkit';

const cartItems =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const initialState = {
  cartItems: cartItems,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },

    removeFromCart: (state, action) => {
      console.log('removeFromCart');
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
