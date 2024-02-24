import { ProductType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

export interface Favorites {
  items: ProductType[];
}

const initialState: Favorites = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFaves: (state, action: { type: string; payload: ProductType }) => {
      state.items.push(action.payload);
    },
    removeFromFaves: (state, action: { type: string; payload: number }) => {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      state.items = [...newItems];
    },
  },
});

export const { addToFaves, removeFromFaves } = favoritesSlice.actions;
export default favoritesSlice.reducer;
