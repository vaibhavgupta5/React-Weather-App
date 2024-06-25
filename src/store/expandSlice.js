import { createSlice } from "@reduxjs/toolkit";


const expandSlice = createSlice({
  name: "expand",
  initialState: {
    expanding: false,
  },
  reducers: {
    expand: (state) => {
      state.expanding = true;
    },
    contract: (state) => {
      state.expanding = false;
    },
  },
});

export const expandAction = expandSlice.actions;
export default expandSlice;
