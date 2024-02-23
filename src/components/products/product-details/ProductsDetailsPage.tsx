import { ProductType } from "@/types/product";
import Image from "next/image";
import cartPlus from "@/public/cart-plus-white.svg";
import RatingStar from "src/components/shared/rating-star/RatingStar";
interface Props {
  product: ProductType;
}

const ProductsDetailsPage: React.FC<Props> = ({ product }) => {
  const {
    id,
    title,
    description,
    category,
    price,
    image,
    rating: { rate, count },
  } = product;
  return (
    <div className=" min-h-[100dvh]">
      <div className=" bg-white flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
          quality={50}
          className=" w-5/6 "
        />
      </div>
      <div className=" pt-2 pb-12 px-4">
        <div className=" flex justify-between mb-4 mt-2 items-start">
          <div className="flex flex-col gap-y-2">
            <RatingStar rate={rate} />
            <p className=" text-white bg-shopBlue dark:bg-shopBlueD py-1 px-2 rounded dark:border dark:border-gray-500">
              {category}
            </p>
          </div>
          <p className=" text-2xl mr-1 dark:text-white">{price}$</p>
        </div>
        <div>
          <p className=" dark:text-white">{description}</p>
        </div>
        <div className="flex justify-center">
          <button className=" bg-purple-700 dark:bg-purple-500 text-white flex items-center gap-2 py-1 px-2 rounded-md mt-4">
            ADD TO CART{" "}
            <Image src={cartPlus} alt="cart" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
