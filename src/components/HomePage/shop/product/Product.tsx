import type { ProductType } from "@/types/product";
import React from "react";
import Image from "next/image";
import emptyHeart from "@/public/heart-empty.svg";
import filledHeart from "@/public/heart-filled.svg";
import cartCheck from "@/public/cart-check.svg";
import cartPlus from "@/public/cart-plus.svg";
import label from "@/public/label.svg";

interface Props {
  product: ProductType;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="@product@ border border-gray-300  p-2 rounded-md flex flex-col justify-between bg-white hover:shadow-lg hover:shadow-shopBlue"
    >
      <div className=" w-full h-52">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={400}
          className=" aspect-square"
        />
      </div>

      <div>
        <div>
          <h2>{product.title.substring(0, 30)}</h2>
        </div>
        <div className=" flex items-center justify-between mt-4">
          <div>
            <p className=" border-b border-gray-300">{product.price}$</p>
          </div>
          <div className="flex items-center gap-2 ">
            <button>
              <Image src={emptyHeart} alt="heart" className="w-6" />
            </button>
            <button>
              <Image src={cartPlus} alt="cart" className=" w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
