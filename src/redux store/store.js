import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filtersSlice';
import addToCartReducer from './addToCartSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    addToCart: addToCartReducer,
  },
});
