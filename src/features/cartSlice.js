import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => { //this function is to add product to cart if already exists increases quantity.
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => { // this function is to remove product from cart using product Id.
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    updateQuantity: (state, action) => { // this function is to change quantity from cartitem component.
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        const newQuantity = item.quantity + amount;
        if (newQuantity >= 1) {
          item.quantity = newQuantity;
        }
      }
    },
    clearCart: (state) => { //this will clear the cart
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items; //alredy exporting the specific state to use in useSelector.
export const selectCartTotalCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0); //exporting the number of items in cart for header.

export default cartSlice.reducer;