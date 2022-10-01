import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import cooperativeReducer from "./features/cooperativeSlice";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cooperative: cooperativeReducer,
    product: productReducer,
  },
});
