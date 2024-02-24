"use client";

import { Store } from "@/types/store/storeType";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SyncFavorites = () => {
  const favorites = useSelector((state: Store) => state.favorites.items);
  useEffect(() => {
    localStorage.setItem("faves", JSON.stringify(favorites));
  }, [favorites]);
  return null;
};

export default SyncFavorites;
