import { createSlice } from '@reduxjs/toolkit';

const favoriteItems =
  localStorage.getItem('favoriteItems') !== null
    ? JSON.parse(localStorage.getItem('favoriteItems'))
    : [];

const initialState = {
  favoriteItems: favoriteItems,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.favoriteItems.some((item) => item.id === action.payload.id)) {
        state.favoriteItems.push(action.payload);

        localStorage.setItem(
          'favoriteItems',
          JSON.stringify(state.favoriteItems.map((item) => item))
        );
      }
    },

    removeFromFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favoriteItems.map((item) => item))
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
