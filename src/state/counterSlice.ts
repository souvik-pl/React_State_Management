import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementCount } = counterSlice.actions;

export default counterSlice.reducer;
