import { createSlice } from "@reduxjs/toolkit";

// This slice stores data of cities page
const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: ["Lucknow", "Delhi", "Mumbai"],
    cities_images: [
      "https://images.unsplash.com/photo-1688287580970-70fe8e0f4bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDQxNjB8MHwxfHNlYXJjaHwxfHxsdWNrbm93JTIwaGlzdG9yaWNhbHxlbnwwfHx8fDE3MTkxNjAyMzR8MA&ixlib=rb-4.0.3&q=80&w=200",
      "https://images.unsplash.com/photo-1705861145657-076d687b957f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDQxNjB8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMGhpc3RvcmljYWx8ZW58MHx8fHwxNzE5MTYwMTE4fDA&ixlib=rb-4.0.3&q=80&w=200",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDQxNjB8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBoaXN0b3JpY2FsfGVufDB8fHx8MTcxOTE2MDE0NHww&ixlib=rb-4.0.3&q=80&w=200",
    ],
  },
  reducers: {
    // This action is used to add cities to the cities array
    addCities: (state, action) => {
      const { city, thumb } = action.payload;
      state.cities_images.push(thumb.thumb);
      state.cities.push(city);
    },
  },
});

export const citiesAction = citiesSlice.actions;
export default citiesSlice;
