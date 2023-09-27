import { configureStore } from "@reduxjs/toolkit";

import movies from "./reducers/movies";

export const store = configureStore({
  reducer: {
    movies,
  },
});
