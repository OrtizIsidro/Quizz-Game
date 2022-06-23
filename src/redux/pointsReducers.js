import { createSlice } from "@reduxjs/toolkit";
const pointsSlice = createSlice({
  name: "points",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, reset } = pointsSlice.actions;
export default pointsSlice.reducer;
