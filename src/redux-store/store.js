import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filtersSlice';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
