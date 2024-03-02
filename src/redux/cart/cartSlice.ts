import { CartProductType, ProductType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  items: CartProductType[];
  totalCost: number;
  isPaid: boolean;
  init: boolean;
}

const initialState: Cart = {
  items: [],
  isPaid: false,
  totalCost: 0,
  init: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calculateCost: (state) => {
      let cost = 0;
      state.items.forEach((item) => {
        cost += item.price * item.quantity;
      });
      state.totalCost = cost;
    },
    addItem: (state, action: { type: string; payload: ProductType }) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.init = false;
      } else {
        state.items[itemIndex].quantity++;
        state.init = false;
      }
    },
    removeItem: (state, action: { type: string; payload: number }) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
        state.init = false;
      } else {
        state.items[itemIndex].quantity--;
        state.init = false;
      }
    },
    insertBulk: (
      state,
      action: { type: string; payload: CartProductType[] }
    ) => {
      state.items = [...action.payload];
      state.init = false;
    },
  },
});

export const { addItem, removeItem, insertBulk, calculateCost } =
  cartSlice.actions;
export default cartSlice.reducer;
