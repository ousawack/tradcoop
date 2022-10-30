import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import cooperativeReducer from "./features/cooperativeSlice";
import productReducer from "./features/productSlice";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cooperative: cooperativeReducer,
    product: productReducer,
    category: categoryReducer,
  },
});
