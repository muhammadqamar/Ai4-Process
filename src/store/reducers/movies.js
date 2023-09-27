import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: null,
};

export const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setAllmovies: (state, action) => {
      state.allMovies = action.payload;
    },
  },
});

export const { setAllmovies } = movies.actions;

export default movies.reducer;
