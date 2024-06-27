import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice/counterSlice";

export const store = configureStore({
  product: {
    conterReducer: productSlice,
    product: productSlice,
  },
});
