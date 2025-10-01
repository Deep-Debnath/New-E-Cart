import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    additem: (state, action) => {
      state.push(action.payload);
    },
    removeitem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { additem, removeitem, clearcart } = cartSlice.actions;
