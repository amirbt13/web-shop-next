import type { ProductType } from "@/types/product";
import React from "react";
import Image from "next/image";
import label from "@/public/label.svg";
import Link from "next/link";
import ProductActions from "./product-actions/ProductActions";

interface Props {
  product: ProductType;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="@product@ border border-gray-300  p-2 lg:p-4 rounded-md flex flex-col justify-between bg-white hover:shadow-lg hover:shadow-shopBlue transition-shadow duration-100">
      <Link
        className=" w-full h-52 lg:h-80 flex items-center justify-center"
        href={`/products/${product.id}`}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={400}
          className=" aspect-square "
        />
      </Link>

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
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
