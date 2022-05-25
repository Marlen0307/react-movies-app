import { createAsyncThunk, Slice, createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../../service";
import { RootState } from "../../store";

export const getMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (fakeVar, thunkAPI) => {
    try {
      const movies = await fetchMovies();
      return movies;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  movies: [],
  isLoading: false,
};
export const moviesSlice: Slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.value = [];
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.movies = [];
      });
  },
});
export const { reset } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.value;
export const selectMoviesState = (state: RootState) => state.movies;
export default moviesSlice.reducer;
