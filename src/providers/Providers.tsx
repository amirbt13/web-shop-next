"use client";
import store from "@/redux/store";
import SyncCart from "@/utils/SyncCart";
import SyncDarkMode from "@/utils/SyncDarkMode";
import SyncFavorites from "@/utils/SyncFavorites";
import { Provider } from "react-redux";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SyncDarkMode />
      <SyncCart />
      <SyncFavorites />
      {children}
    </Provider>
  );
}

export default Providers;
