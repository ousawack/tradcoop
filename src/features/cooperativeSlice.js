import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cooperative: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    address: null,
    short_description: null,
    products: null,
  },
};

export const cooperativeSlice = createSlice({
  name: "cooperative",
  initialState,
  reducers: {
    setCooperative: (state, action) => {
      state.cooperative = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCooperative } = cooperativeSlice.actions;

export const selectcooperative = (state) => state.cooperative.cooperative;

export default cooperativeSlice.reducer;
