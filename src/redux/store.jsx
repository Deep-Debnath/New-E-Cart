import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slices/cart";
import searchitem from './slices/search'

export const store = configureStore({
  reducer: {
    cart: cartreducer,
    search:searchitem,
  },
});
