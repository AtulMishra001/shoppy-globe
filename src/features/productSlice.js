import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "", 
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => { //this function sets the search query for products
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = productSlice.actions;
export const selectSearchQuery = (state) => state.products.searchQuery; // here also we are already exporting the specific piece of state to use in useSelector.

export default productSlice.reducer;
