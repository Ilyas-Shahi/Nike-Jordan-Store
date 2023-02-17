import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfShownProducts: 0,
  genderFilter: '',
  priceFilter: '',
  kidsFilter: '',
  colorFilter: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    numOfShownProductsSetter: (state, action) => {
      state.numOfShownProducts = action.payload;
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
  },
});

export const {
  numOfShownProductsSetter,
  setPriceFilter,
  setGenderFilter,
  setKidsFilter,
  setColorFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
