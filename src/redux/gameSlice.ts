import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Game, Category } from '../types';

interface GamesState {
  categories: Category[];
  games: Game[];
  loading: boolean;
  error: string | null;
}

const initialState: GamesState = {
  categories: [],
  games: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk('games/fetchCategories', async () => {
  const response = await axios.get('https://casino.api.pikakasino.com/v1/pika/en/config');
  return response.data.categories;
});

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async ({ category, search, pageNumber, pageSize }: { category?: string; search?: string; pageNumber?: number; pageSize?: number }) => {
    const response = await axios.get('https://casino.api.pikakasino.com/v1/pika/en/games/tiles', {
      params: { category, search, pageNumber, pageSize },
    });
    return response.data.games;
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch games';
      });
  },
});

export default gamesSlice.reducer;