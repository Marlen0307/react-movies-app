import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "90vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
      <Typography>This page is loading ...</Typography>
    </Box>
  );
}
