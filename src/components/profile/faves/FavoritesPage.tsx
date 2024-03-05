"use client";

import { Store } from "@/types/store/storeType";
import { useSelector } from "react-redux";
import Products from "src/components/products/Products";

const FavoritesPage = () => {
  const faves = useSelector((state: Store) => state.favorites.items);

  return (
    <div>
      <h1 className=" dark:text-white  text-xl">Favorited Products</h1>
      <Products products={faves} />
    </div>
  );
};

export default FavoritesPage;
