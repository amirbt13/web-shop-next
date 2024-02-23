import { CartProductType, ProductType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  items: CartProductType[];
  isPaid: boolean;
}

const initialState: Cart = {
  items: [],
  isPaid: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: { type: string; payload: ProductType }) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity++;
      }
    },
    removeItem: (state, action: { type: string; payload: number }) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
