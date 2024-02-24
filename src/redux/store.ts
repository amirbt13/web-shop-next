import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "@/redux/darkMode/darkModeSlice";
import cartReducer from "@/redux/cart/cartSlice";
import favoritesReducer from "@/redux/favorites/favoritesSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export default store;
