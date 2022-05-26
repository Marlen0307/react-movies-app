import { Container } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Footer } from "./Footer";
import '../../index.css';
import { useAppSelector } from "../../hooks";
import { selectMoviesState } from "../../features/movies/moviesSlice";
import Loading from "./Loading";

export const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{paddingBottom:'5%', minHeight: '90vh'}}>{children}</Container>
      <Footer />
    </>
  );
};
