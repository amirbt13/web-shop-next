import { Cart } from "@/redux/cart/cartSlice";
import { DarkModeState } from "@/redux/darkMode/darkModeSlice";

export type Store = {
  darkMode: DarkModeState;
  cart: Cart;
};
