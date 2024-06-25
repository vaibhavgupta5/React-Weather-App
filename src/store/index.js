import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import expandSlice from "./expandSlice";
import citiesSlice from "./citiesSlice";
import currCitySlice from "./currCitySlice";
import fetchSlice from "./fetchSlice";


// Creating store and assigning slices to it
const weatherStore = configureStore({
  reducer: {
    data: dataSlice.reducer,
    expand: expandSlice.reducer,
    cities: citiesSlice.reducer,
    currCity: currCitySlice.reducer,
    fetch: fetchSlice.reducer,
  },
});

export default weatherStore;
