"use client";
import { Store } from "@/types/store/storeType";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SyncCart = () => {
  const cart = useSelector((state: Store) => state.cart.items);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return null;
};

export default SyncCart;
