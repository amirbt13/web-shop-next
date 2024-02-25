"use client";
import Image from "next/image";
import trash from "@/public/trash.svg";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "@/redux/cart/cartSlice";
import { CartProductType } from "@/types/product";
interface Props {
  product: CartProductType;
}

const CartItemActions: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center border border-gray-300 gap-5 py px-3 w-max rounded-xl  bg-white text-black">
      <button
        onClick={() => dispatch(addItem(product))}
        className=" text-2xl text-center"
      >
        +
      </button>
      <div className=" text-xl">{product.quantity}</div>
      <button
        className=" rounded-e-sm text-2xl text-red-600"
        onClick={() => dispatch(removeItem(product.id))}
      >
        {product.quantity === 1 ? (
          <Image src={trash} alt="trash" width={20} height={25} />
        ) : (
          "-"
        )}
      </button>
    </div>
  );
};

export default CartItemActions;
