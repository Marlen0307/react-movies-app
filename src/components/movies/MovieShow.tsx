import { Box, Card, Divider, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { selectMoviesState } from "../../features/movies/moviesSlice";
import { useAppSelector } from "../../hooks";
import { MovieInfo } from "./MovieCard";
import { useMoviesStyles } from "./MoviesStyles";

export const MovieShow = (props: any) => {
  let params = useParams();
  const classes = useMoviesStyles();
  const { id } = params;
  const moviesState = useAppSelector(selectMoviesState);
  const { movies } = moviesState;
  const selectedMovie = movies.find((movie: any) => movie.id === id);
  console.log(selectedMovie);
  const {
    image,
    title,
    description,
    contentRating,
    genreList,
    genres,
    imDbRating,
    imDbRatingVotes,
    metacriticRating,
    plot,
    runtimeStr,
    starList,
    stars,
  } = selectedMovie
  const showProps = {description, contentRating, genres, imDbRating, imDbRatingVotes, metacriticRating, plot, runtimeStr, stars}
  return (
    <Grid container margin={3}>

        <Grid item xs={12} md={5}>
          <Box display={"flex"} justifyContent={"center"}>
            <img className={`${classes.images}`} src={image} alt={title} />
          </Box>
        </Grid>
        <Grid item xs={12} md>
            {
                Object.keys(showProps).map((key: string, index:number) => <><MovieInfo label = {key} val={selectedMovie[key]} /> <Divider /></>)
            }
        </Grid>
    </Grid>
  );
};
