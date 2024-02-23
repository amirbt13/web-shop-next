import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "@/redux/darkMode/darkModeSlice";
import cartReducer from "@/redux/cart/cartSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    cart: cartReducer,
  },
});

export default store;
