import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    category: null,
    short_description: null,
    price: null,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions;

export const selectProduct = (state) => state.product.product;

export default productSlice.reducer;
