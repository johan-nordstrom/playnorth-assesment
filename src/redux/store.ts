import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './gameSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});