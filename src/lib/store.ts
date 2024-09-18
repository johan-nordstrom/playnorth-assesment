import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../redux/gameSlice';
import { AppDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

export default AppDispatch;