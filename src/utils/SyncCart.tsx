"use client";
import { insertBulk } from "@/redux/cart/cartSlice";
import { Store } from "@/types/store/storeType";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SyncCart = () => {
  const cart = useSelector((state: Store) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (!items) {
      return;
    }
    const parsedItems = JSON.parse(items);
    if (parsedItems.length) {
      dispatch(insertBulk(parsedItems));
    }
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return null;
};

export default SyncCart;
