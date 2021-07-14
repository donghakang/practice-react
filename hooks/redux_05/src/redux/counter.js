import { createSlice } from "@reduxjs/toolkit";

// Slice can define, state / reducers / actions at the same time
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload.by;
    },
  },
});

// export Actions as a case 
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export actual reducer
export default counterSlice.reducer;
