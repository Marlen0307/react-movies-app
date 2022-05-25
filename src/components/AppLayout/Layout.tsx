import { Container } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Footer } from "./Footer";
import '../../index.css';

export const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <ResponsiveAppBar />
      <Container >{children}</Container>
      <Footer />
    </>
  );
};
