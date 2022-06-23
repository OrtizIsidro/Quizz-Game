import { configureStore } from "@reduxjs/toolkit";
import pointsReducer from "./pointsReducers";
import appStepsReducer from "./appStepsReducer";
import questionsBoardStepsReducer from "./questionsBoardStepsReducer";

export default configureStore({
  reducer: {
    points: pointsReducer,
    app: appStepsReducer,
    questions: questionsBoardStepsReducer,
  },
});
