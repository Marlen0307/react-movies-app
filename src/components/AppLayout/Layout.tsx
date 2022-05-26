import { Container } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Footer } from "./Footer";
import '../../index.css';
import { Box } from "@mui/material";

export const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <ResponsiveAppBar />
      <Box px={5} >{children}</Box>
      <Footer />
    </>
  );
};
