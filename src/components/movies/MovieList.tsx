import { Grid } from '@mui/material';
import React from 'react'
import { selectMoviesState } from '../../features/movies/moviesSlice';
import {  useAppSelector } from '../../hooks'
import { filterMovies } from '../../utils/Helpers';
import Loading from '../AppLayout/Loading';
import Filters from './Filters';
import { MovieCard } from './MovieCard';

export const MovieList = () => {
    const moviesState = useAppSelector(selectMoviesState);
    const {movies, isLoading, filters} = moviesState;
  
    if(isLoading) return <Loading />; 
 

  return (
   <Grid container>
     <Filters />
       {
           filterMovies(movies,filters).map((movie :any, index :number) => {
               return <MovieCard key={movie?.id} movie = {movie}/>
           })
       }
   </Grid>
  )
}
