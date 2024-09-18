import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../redux/gameSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});


export const makeStore = () => {
  return configureStore({
    reducer: gamesReducer,
  });
};