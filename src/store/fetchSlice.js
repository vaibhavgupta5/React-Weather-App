import { createSlice } from "@reduxjs/toolkit";

// checks when API is fetching and When finished
const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    fetching: false,
  },
  reducers: {
    fetch: (state,action) => {
      state.fetching = action.payload;
    },
    
  },
});

export const fetchAction = fetchSlice.actions;
export default fetchSlice;
