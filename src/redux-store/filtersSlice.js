import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfShownProducts: 0,
  sortBy: 'Featured',
  sortFilter: ' | order(price desc)',
  genderFilter: '',
  priceFilter: '',
  kidsFilter: '',
  colorFilter: '',
  searchFilter: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    numOfShownProductsSetter: (state, action) => {
      state.numOfShownProducts = action.payload;
    },

    setSortFilter: (state, action) => {
      state.sortBy = action.payload;

      switch (action.payload) {
        case 'Featured':
          state.sortFilter = ' | order(_createdAt asc)';
          break;
        case 'Newest':
          state.sortFilter = ' | order(_createdAt desc)';
          break;
        case 'Price: High-Low':
          state.sortFilter = ' | order(price desc)';
          break;
        case 'Price: Low-High':
          state.sortFilter = ' | order(price asc)';
          break;
      }
    },

    setGenderFilter: (state, action) => {
      state.genderFilter =
        action.payload.length > 0
          ? ` && count((categories[])[@ in [${action.payload.join(', ')}]]) > 0`
          : '';
    },

    setPriceFilter: (state, action) => {
      const currRange = action.payload.join('-').split('-');
      const fromPrice = +currRange[0];
      const toPrice = +currRange[currRange.length - 1];

      state.priceFilter =
        action.payload.length > 0
          ? ` && price >= ${fromPrice} && price <= ${toPrice}`
          : '';
    },

    setKidsFilter: (state, action) => {
      state.kidsFilter =
        action.payload.length > 0
          ? ` && count((categories[])[@ in [${action.payload}]]) > 0`
          : '';
    },

    setColorFilter: (state, action) => {
      state.colorFilter =
        action.payload.length > 0
          ? ` && count((color[])[@ in [${action.payload.join(', ')}]]) > 0`
          : '';
    },

    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload
        ? ` && title match "${action.payload}"`
        : '';
    },
  },
});

export const {
  numOfShownProductsSetter,
  setSortFilter,
  setPriceFilter,
  setGenderFilter,
  setKidsFilter,
  setColorFilter,
  setSearchFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
