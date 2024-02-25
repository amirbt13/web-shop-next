"use client";

import { Store } from "@/types/store/storeType";
import { useSelector } from "react-redux";
import CartItem from "./cart-item/CartItem";
import cart from "@/public/cart.svg";
import cartWhite from "@/public/cart-white.svg";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const items = useSelector((state: Store) => state.cart.items);
  const darkMode = useSelector((state: Store) => state.darkMode.value);
  return (
    <div className=" min-h-[calc(100dvh-85px)] w-full">
      <div className="p-2 lg:p-4 flex items-center">
        <Image
          src={darkMode ? cartWhite : cart}
          alt="cart"
          width={40}
          height={40}
        />
        <h2 className=" dark:text-white text-xl lg:text-4xl">Your Cart</h2>
      </div>
      <div className=" p-2 flex flex-col gap-4">
        {!items.length ? (
          <div className=" dark:text-white mt-8 flex flex-col justify-center items-center gap-y-4">
            <h6 className=" text-center">there is no item in your cart</h6>
            <Link
              href={"/"}
              className=" bg-purple-700 dark:bg-purple-500 py-2 px-3 rounded"
            >
              HOME
            </Link>
          </div>
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
