import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [],
  error: null,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setQuotes: (state, action) => {
      state.quotes = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.quotes = [];
      state.error = action.payload;
    },
  },
});

export const { setQuotes, setError } = quotesSlice.actions;
export default quotesSlice.reducer;
