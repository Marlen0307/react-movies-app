import moviesReducer from './features/movies/moviesSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
      movies: moviesReducer,
    },
    devTools: true
  });
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

