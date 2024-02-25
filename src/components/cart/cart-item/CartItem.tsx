import { CartProductType } from "@/types/product";
import Image from "next/image";
import CartItemActions from "src/components/shared/product-actions/cart-item-actions/CartItemActions";

interface Props {
  product: CartProductType;
}

const CartItem: React.FC<Props> = ({ product }) => {
  const { id, image, title, description, category, price, quantity } = product;
  return (
    <div className=" border border-gray-400 p-2 lg:py-4 lg:px-6  rounded-md bg-white dark:bg-slate-800 dark:text-white">
      <div className="flex gap-4 justify-between">
        <div>
          <h6>{title.substring(0, 60)}</h6>
          <p>{category}</p>
        </div>
        <div className=" bg-white p-3 rounded-md">
          <Image src={image} alt={title} width={80} height={140} />
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <p>{(quantity * price).toFixed(2)}$</p>
        <CartItemActions product={product} />
      </div>
    </div>
  );
};

export default CartItem;
