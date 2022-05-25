import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useMoviesStyles } from "./MoviesStyles";

export const MovieShow = ({ movie }: { movie: any }) => {
  console.log(movie);
  const { image, title, description } = movie;
  const classes = useMoviesStyles();
  return (
    <Grid item md={4}>
      <Paper
        elevation={10}
        sx={{
          minHeight: "400px",
          margin: "5%",
        }}
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
const MovieInfo = ({ val }: { val: string }) => {
  return (
    <Typography margin={1} fontWeight={600} fontSize={18} textAlign={"center"}>
      {val}
    </Typography>
  );
};
