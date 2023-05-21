import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./slices/FeebackSlice";

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
