import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },

    increaseByAmount: (state, { payload }) => {
      state.value += payload;
    },
  },
});

export const { increase, decrease, increaseByAmount } = counterSlice.actions;

export default counterSlice.reducer;
