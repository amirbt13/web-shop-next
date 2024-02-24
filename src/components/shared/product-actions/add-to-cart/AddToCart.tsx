"use client";
import Image from "next/image";
import cartPlus from "@/public/cart-plus.svg";
import cartCheck from "@/public/cart-check.svg";
import cartPlusWhite from "@/public/cart-plus-white.svg";
import cartCheckWhite from "@/public/cart-check-white.svg";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cart/cartSlice";
import { ProductType } from "@/types/product";
import { useSelector } from "react-redux";
import { Store } from "@/types/store/storeType";

interface Props {
  product: ProductType;
  inCard: boolean;
}

const AddToCart: React.FC<Props> = ({ product, inCard }) => {
  const cart = useSelector((state: Store) => state.cart.items);

  const dispatch = useDispatch();

  const isInCart = cart.find((item) => item.id === product.id);

  const picSelecor = () => {
    if (isInCart && inCard) {
      return cartCheck;
    }
    if (isInCart && !inCard) {
      return cartCheckWhite;
    }
    if (!isInCart && inCard) {
      return cartPlus;
    }
    if (!isInCart && !inCard) return cartPlusWhite;
  };
  return (
    <div className="flex justify-center lg:mt-10">
      <button
        onClick={() => dispatch(addItem(product))}
        className={`${
          inCard
            ? " bg-white"
            : "bg-purple-700 dark:bg-purple-500 text-white flex items-center gap-2 py-1 px-2 rounded-md "
        }  `}
      >
        {inCard ? "" : "ADD TO CART "}

        <Image src={picSelecor()} alt="cart" width={30} height={30} />
      </button>
    </div>
  );
};

export default AddToCart;
