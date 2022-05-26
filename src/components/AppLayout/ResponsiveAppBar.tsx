import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ArrowBack, Movie } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectMoviesState,
  setSelected,
} from "../../features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  const { selected } = useAppSelector(selectMoviesState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    dispatch(setSelected(null));
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Movie sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Movies
          </Typography>

          {selected && (
            <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
              <IconButton sx={{ p: 0 }} onClick={() => goBack()}>
                <ArrowBack sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
