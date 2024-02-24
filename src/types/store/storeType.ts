import { Cart } from "@/redux/cart/cartSlice";
import { DarkModeState } from "@/redux/darkMode/darkModeSlice";
import { Favorites } from "@/redux/favorites/favoritesSlice";

export type Store = {
  darkMode: DarkModeState;
  cart: Cart;
  favorites: Favorites;
};
