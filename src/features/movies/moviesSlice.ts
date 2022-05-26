import { createAsyncThunk, Slice, createSlice } from "@reduxjs/toolkit";
import { FILTER_COMPERATORS } from "../../constants";
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
  filters : [
    {name:'title', value: null ,comperator: FILTER_COMPERATORS.CONTAINS, label: "Title"},
    {name:'description',value: null, comperator: FILTER_COMPERATORS.CONTAINS, label:'Year'},
    {name:'genres',value: null, comperator: FILTER_COMPERATORS.CONTAINS, label:'Genre'},
    {name:'imDbRating',value: null, comperator: FILTER_COMPERATORS.EQUAL_OR_BIGGER, label:'IMDb Rating'},
  ],
  selected : null,
  isLoading: false,
};
export const moviesSlice: Slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    changeFilters : (state :any, action: any) => {
      const { filters } = state;
      const changedFilters = filters.map((filter: any) => {
        if(filter.name === action.payload.name){
          return {...filter, value: action.payload.value}
        }
        return filter;
      })
      state.filters = changedFilters;
    },
    setSelected : (state :any, action: any) => {
      state.selected = action.payload;
    }

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
export const { changeFilters, setSelected } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.value;
export const selectMoviesState = (state: RootState) => state.movies;
export default moviesSlice.reducer;
