import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceFilter: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPriceFilter: (state, action) => {
      const currRange = [];
      action.payload.map((opt) => opt.split('-'));
      // for (let i = 0; i < action.payload.length; i++) {
      //   currRange.push(action.payload[0].split('-'));
      // }

      console.log(currRange);

      state.priceFilter = [1, 2];
    },
    setKidsFilter: (state) => {
      state.priceFilter = 'Kids';
    },
  },
});

export const { setPriceFilter, setKidsFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
