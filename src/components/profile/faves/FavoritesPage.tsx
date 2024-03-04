"use client";

import { Store } from "@/types/store/storeType";
import { useSelector } from "react-redux";
import Products from "src/components/products/Products";

const FavoritesPage = () => {
  const faves = useSelector((state: Store) => state.favorites.items);

  return (
    <div>
      <Products products={faves} />
    </div>
  );
};

export default FavoritesPage;
