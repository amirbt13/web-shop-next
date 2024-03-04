"use client";

import { insertBulk } from "@/redux/favorites/favoritesSlice";
import { Store } from "@/types/store/storeType";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SyncFavorites = () => {
  const favorites = useSelector((state: Store) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    const faveItems = localStorage.getItem("faves");
    if (!faveItems) {
      return;
    }
    const parsedFavesArr = JSON.parse(faveItems);
    dispatch(insertBulk(parsedFavesArr));
  }, [dispatch]);

  useEffect(() => {
    if (favorites.init) {
      return;
    }
    localStorage.setItem("faves", JSON.stringify(favorites.items));
  }, [favorites]);
  return null;
};

export default SyncFavorites;
