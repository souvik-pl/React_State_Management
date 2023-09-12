import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByFive: (state) => {
      state.value += 5;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByFive } = counterSlice.actions;

export default counterSlice.reducer;
