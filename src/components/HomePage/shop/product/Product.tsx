import type { ProductType } from "@/types/product";
import React from "react";
import Image from "next/image";
import emptyHeart from "@/public/heart-empty.svg";
import filledHeart from "@/public/heart-filled.svg";
import cartCheck from "@/public/cart-check.svg";
import cartPlus from "@/public/cart-plus.svg";
import label from "@/public/label.svg";
import Link from "next/link";

interface Props {
  product: ProductType;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="@product@ border border-gray-300  p-2 lg:p-4 rounded-md flex flex-col justify-between bg-white hover:shadow-lg hover:shadow-shopBlue transition-shadow duration-100"
    >
      <div className=" w-full h-52 lg:h-80 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={400}
          className=" aspect-square "
        />
      </div>

      <div>
        <div>
          <h2 className=" lg:text-base">{product.title.substring(0, 30)}</h2>
        </div>
        <div className=" flex items-center justify-between mt-4">
          <div>
            <p className=" border-b border-gray-300 lg:text-lg">
              {product.price}$
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <button>
              <Image src={emptyHeart} alt="heart" className="w-6 lg:w-8" />
            </button>
            <button>
              <Image src={cartPlus} alt="cart" className=" w-8 lg:w-10" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
