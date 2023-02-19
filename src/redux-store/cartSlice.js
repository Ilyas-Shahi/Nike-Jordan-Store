import { createSlice } from '@reduxjs/toolkit';

const cartItems =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

function saveToLS(items) {
  localStorage.setItem('cartItems', JSON.stringify(items.map((item) => item)));
}

const initialState = {
  cartItems: cartItems,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];

      saveToLS(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      saveToLS(state.cartItems);
    },

    updateCart: (state, action) => {
      console.log(action.payload);
      console.log(cartItems);
      state.cartItems[action.payload.index] = action.payload.updated;
      console.log(cartItems);

      saveToLS(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
