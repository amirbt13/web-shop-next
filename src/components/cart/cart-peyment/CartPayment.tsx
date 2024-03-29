"use client";

import { Store } from "@/types/store/storeType";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CartPayment = () => {
  const totalCost = useSelector((state: Store) => state.cart.totalCost);
  const session = useSession();
  const router = useRouter();
  const purchase = () => {
    if (!session.data?.user) {
      router.push("/auth/signin");
      return;
    }
  };
  return (
    <div className=" dark:text-white  border-t lg:border border-gray-300 w-full rounded-t-xl lg:rounded-xl py-4  px-2 flex flex-col gap-6  shadow-[0_-4px_6px_1px] lg:shadow-xl dark:shadow-blue-800 shadow-blue-500 z-40 dark:bg-slate-800 bg-slate-100 ">
      <div className="flex">
        <h6>Total Cost: {totalCost} $</h6>
        <p></p>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className=" dark:bg-green-600 py-2 px-4 rounded  bg-green-700 text-white"
          onClick={purchase}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default CartPayment;
