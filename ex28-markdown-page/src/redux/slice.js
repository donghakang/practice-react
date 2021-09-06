import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: { text: "" },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { changeText } = textSlice.actions;

export default textSlice.reducer;
