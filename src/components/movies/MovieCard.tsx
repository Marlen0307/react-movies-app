import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setSelected } from "../../features/movies/moviesSlice";
import { useAppDispatch } from "../../hooks";
import { useMoviesStyles } from "./MoviesStyles";

export const MovieCard = ({ movie }: { movie: any }) => {
  const { image, title, description, id } = movie;
  const classes = useMoviesStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigateToMovie = (selectedMovie :any) => {
    dispatch(setSelected(selectedMovie));
    navigate(`/movies/${selectedMovie?.id}`);
  }
  return (
    <Grid item md={4}>
      <Paper
        elevation={10}
        sx={{
          minHeight: "400px",
          margin: "5%",
        }}
        onClick={() => navigateToMovie(movie)}
      >
        <Box
          p={2}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box display={"flex"} justifyContent={"center"} width={"80%"}>
            <img className={`${classes.images}`} src={image} alt={title} />
          </Box>
          <MovieInfo val={title} />
          <MovieInfo val={description} />
        </Box>
      </Paper>
    </Grid>
  );
};
export const MovieInfo = ({
  val,
  label = false,
}: {
  val: string;
  label?: boolean | string;
}) => {
  return (
    <Box display={"flex"} flexDirection = {'column'} justifyContent = {'center'}>
        {label && (
        <Typography
          margin={1}
          fontWeight={600}
          fontSize={18}
          textAlign={"center"}
        >
          {label}
        </Typography>
      )}
      <Typography
        margin={1}
        fontSize={18}
        textAlign={"center"}
      >
        {val}
      </Typography>
    
    </Box>
  );
};
