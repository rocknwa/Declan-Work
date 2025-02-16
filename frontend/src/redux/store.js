import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import ratingsReducer from './slices/ratingsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    ratings: ratingsReducer
  },
});

export default store;
