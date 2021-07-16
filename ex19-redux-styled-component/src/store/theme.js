import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: false,
    },
    reducers: {
        changeMode: (state) => {
            state.theme = !state.theme;
        }
    }
    
})

export const { changeMode } = themeSlice.actions;


export default themeSlice.reducer;