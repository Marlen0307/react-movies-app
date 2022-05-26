import { Container } from "@mui/system";
import React, { useEffect } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Footer } from "./Footer";
import "../../index.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getMovies, selectMoviesState, setSelected } from "../../features/movies/moviesSlice";
import { useParams } from "react-router-dom";

export const Layout = (props: any) => {
  const { children } = props;
  const {id} = useParams();

  const dispatch = useAppDispatch();
  const moviesState = useAppSelector(selectMoviesState);
  const {movies} = moviesState;
  useEffect(() => {
    if(id){
        dispatch(setSelected(movies.find((movie :any) => movie.id === id)));
    }
  } , [movies,dispatch,id]);

  useEffect(() => {
    debugger;
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ paddingBottom: "5%", minHeight: "90vh" }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};
