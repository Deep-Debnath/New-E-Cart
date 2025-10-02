import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../public/files";

const searchslice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    searchitem: (state,action) => {
      return products.filter((object) =>
        object.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearitem:()=>[]
  },
});

export default searchslice.reducer;
export const { searchitem ,clearitem} = searchslice.actions;
