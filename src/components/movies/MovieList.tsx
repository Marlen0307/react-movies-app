import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { getMovies, selectMoviesState } from '../../features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks'
import { MovieCard } from './MovieCard';

export const MovieList = () => {
    const dispatch = useAppDispatch();
    const moviesState = useAppSelector(selectMoviesState);
    const {movies, isLoading} = moviesState;
    useEffect(() => {
        dispatch(getMovies());
      },[dispatch]);
    if(isLoading) return <div>Loading...</div>; //TODO: Implement loading view
 

  return (
   <Grid container>
       {
           movies.map((movie :any, index :number) => {
               return <MovieCard key={movie?.id} movie = {movie}/>
           })
       }
   </Grid>
  )
}
