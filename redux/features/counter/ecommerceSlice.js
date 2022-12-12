import { createSlice } from "@reduxjs/toolkit";

export const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    AddToCart: (state, action) => {
      console.log("ggggg", action.payload);
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, AddToCart } = ecommerceSlice.actions;

export const ecommercelist = (state) => state.ecommerce.value;

export const Totalcommercelist = (state) =>
  state?.ecommerce.value?.reduce((total, item) => (total += item.price), 0);

export default ecommerceSlice.reducer;
