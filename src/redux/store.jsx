import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./slices/counter";
import cartreducer from "./slices/cart";

export const store = configureStore({
  reducer: {
    counter: counterslice,
    cart: cartreducer,
  },
});
