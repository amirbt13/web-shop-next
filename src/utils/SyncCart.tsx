"use client";
import { calculateCost, insertBulk } from "@/redux/cart/cartSlice";
import { CartProductType } from "@/types/product";
import { Store } from "@/types/store/storeType";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SyncCart = () => {
  const cart = useSelector((state: Store) => state.cart.items);
  const init = useSelector((state: Store) => state.cart.init);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`);
      const data = await res.json();
      if (res.status === 200) {
        dispatch(insertBulk(data.cart));
      }
    };
    fetchCart();
  }, [dispatch]);

  useEffect(() => {
    if (init) {
      return;
    }
    const itemsWithId = cart.map((i: CartProductType) => {
      return { productId: i.id, quantity: i.quantity };
    });
    const updateCart = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: "POST",
        body: JSON.stringify({ items: itemsWithId }),
      });
      const data = await res.json();
      if (res.status === 201) {
        console.log("items saved");
      }
    };
    updateCart();
    dispatch(calculateCost());
  }, [cart, dispatch, init]);

  return null;
};

export default SyncCart;
