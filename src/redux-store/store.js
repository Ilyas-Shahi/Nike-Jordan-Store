import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filtersSlice';
import addToCartReducer from './addToCartSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    addToCart: addToCartReducer,
    favorites: favoritesReducer,
  },
});
