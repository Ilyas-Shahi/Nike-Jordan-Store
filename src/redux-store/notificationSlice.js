import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNotification: false,
  notificationContent: {},
  notificationType: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.showNotification = true;
      state.notificationContent = action.payload.content;
      state.notificationType = action.payload.type;
    },

    closeNotification: (state) => {
      state.showNotification = false;
      state.notificationContent = {};
      state.notificationType = '';
    },
  },
});

export const { showNotification, closeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
