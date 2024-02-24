"use client";

import { Store } from "@/types/store/storeType";
import { useSelector } from "react-redux";
import CartItem from "./cart-item/CartItem";

const CartPage = () => {
  const items = useSelector((state: Store) => state.cart.items);

  return (
    <div className=" min-h-[calc(100dvh-85px)] w-full">
      <div>
        <h2>Your Cart</h2>
      </div>
      <div className=" p-2">
        {!items.length ? (
          <h6>there is no items in your cart</h6>
        ) : (
          items.map((item) => {
            return <CartItem key={item.id} product={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default CartPage;
