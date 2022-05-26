import { Grid } from "@mui/material";
import React from "react";
import {
  changeFilters,
  selectMoviesState,
} from "../../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import TextField from "@mui/material/TextField";

export default function Filters() {
  const { filters } = useAppSelector(selectMoviesState);
  const dispatch = useAppDispatch();
  return (
    <Grid container marginTop={3}>
      {filters.map((filter: any, index: number) => {
        return (
          <Grid key={filter?.name} item xs={12} md={3} padding={2}>
            <TextField
              fullWidth
              value={filter?.value ?? ""}
              onChange={(e: any) =>
                dispatch(
                  changeFilters({ ...filter, value: e.target.value ?? null })
                )
              }
              label={filter?.label}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
