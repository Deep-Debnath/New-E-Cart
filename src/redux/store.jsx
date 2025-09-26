import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterslice,
  },
});
