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
    genres,
    imDbRating,
    imDbRatingVotes,
    metacriticRating,
    plot,
    runtimeStr,
    stars,
  } = selectedMovie;
  const showProps = {
    contentRating,
    genres,
    imDbRating,
    imDbRatingVotes,
    metacriticRating,
    plot,
    runtimeStr,
    stars,
  };
  return (
    <Grid container margin={3}>
      <Grid item xs={12} md={5}>
        <Box display={"flex"} justifyContent={"center"}>
          <img className={`${classes.images}`} src={image} alt={title} />
        </Box>
        <MovieInfo val={title} />
        <MovieInfo val={description} />
      </Grid>
      <Grid item xs={12} md>
        {Object.keys(showProps).map((key: string, index: number) => (
          <React.Fragment key={`${title}_${key}_${index}`}>
            <MovieInfo label={key} val={selectedMovie[key]} /> <Divider />
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};
