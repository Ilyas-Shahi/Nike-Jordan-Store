import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteItems = [...state.favoriteItems, action.payload];
      console.log(state.favoriteItems);
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
