import { createSlice } from "@reduxjs/toolkit";


// This slides currently selected city
const currCitySlice = createSlice({
    name: 'currCity',
    initialState: {
        city: 'Lucknow' },

    reducers: {
        setCurrCity: (state, action) => {
            state.city = action.payload
        }
    }
})

export const currCityAction = currCitySlice.actions;    
export default currCitySlice;