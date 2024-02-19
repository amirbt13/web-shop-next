"use client";
import store from "@/redux/store";
import SyncDarkMode from "@/utils/SyncDarkMode";
import { Provider } from "react-redux";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SyncDarkMode />

      {children}
    </Provider>
  );
}

export default Providers;
