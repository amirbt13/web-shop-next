import { ProductType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

export interface Favorites {
  items: ProductType[];
  init: boolean;
}

const initialState: Favorites = {
  items: [],
  init: true,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFaves: (state, action: { type: string; payload: ProductType }) => {
      state.items.push(action.payload);
      state.init = false;
    },
    removeFromFaves: (state, action: { type: string; payload: number }) => {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      state.items = [...newItems];
      state.init = false;
    },
    insertBulk: (state, action: { type: string; payload: ProductType[] }) => {
      state.items = [...action.payload];
      state.init = false;
    },
  },
});

export const { addToFaves, removeFromFaves, insertBulk } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
