import { configureStore } from '@reduxjs/toolkit';
import dispatcherReducer from './dispatcherSlice.js';
import driverReducer from './driverSlice.js';

export const store = configureStore({
  reducer: {
    dispatcher: dispatcherReducer,
    driver: driverReducer,
  },
});
