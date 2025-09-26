const { createSlice } = require("@reduxjs/toolkit");

const counterslicer = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export default counterslicer.reducer;
export const { increment, decrement, reset } = counterslicer.actions;
