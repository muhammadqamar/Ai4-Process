import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allDocs: null,
};

export const docs = createSlice({
  name: "UploadDocs",
  initialState,
  reducers: {
    setDocs: (state, action) => {
      state.allDocs = action.payload;
    },
  },
});

export const { setDocs } = docs.actions;

export default docs.reducer;
