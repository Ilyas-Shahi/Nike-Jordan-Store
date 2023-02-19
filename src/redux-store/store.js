import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filtersSlice';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';
import notificationReducer from './notificationSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    notification: notificationReducer,
  },
});
