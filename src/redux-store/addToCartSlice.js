import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
