import { createSlice } from "@reduxjs/toolkit";
const QuestionsStepSlice = createSlice({
  name: "questions",
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
export const { increment, reset } = QuestionsStepSlice.actions;
export default QuestionsStepSlice.reducer;
