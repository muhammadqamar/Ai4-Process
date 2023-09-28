import { configureStore } from "@reduxjs/toolkit";

import docs from "./reducers/libreSiftReducer/uploadDocsReducer";

export const store = configureStore({
  reducer: {
    docs,
  },
});
