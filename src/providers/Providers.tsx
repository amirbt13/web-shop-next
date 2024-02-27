"use client";
import store from "@/redux/store";
import SyncCart from "@/utils/SyncCart";
import SyncDarkMode from "@/utils/SyncDarkMode";
import SyncFavorites from "@/utils/SyncFavorites";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <SyncDarkMode />
        <SyncCart />
        <SyncFavorites />
        {children}
      </SessionProvider>
    </Provider>
  );
}

export default Providers;
