import { createSlice } from "@reduxjs/toolkit";
const AppStepsSlice = createSlice({
  name: "app",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 1;
    },
  },
});
export const { increment, reset } = AppStepsSlice.actions;
export default AppStepsSlice.reducer;
