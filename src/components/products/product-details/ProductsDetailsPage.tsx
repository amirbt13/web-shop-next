import { ProductType } from "@/types/product";
import Image from "next/image";
import cartPlus from "@/public/cart-plus-white.svg";
import RatingStar from "src/components/shared/rating-star/RatingStar";
import AddToCart from "src/components/shared/product-actions/add-to-cart/AddToCart";
import Favorite from "src/components/shared/product-actions/favorite/Favorite";
interface Props {
  product: ProductType;
}

const ProductsDetailsPage: React.FC<Props> = ({ product }) => {
  const { id, title, description, category, price, image, rating } = product;
  return (
    <div className=" h-[calc(100dvh-85px)] lg:flex lg:flex-row-reverse">
      <div className=" bg-white flex items-center justify-center lg:basis-2/3">
        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
          quality={50}
          className=" w-1/2 max-h-full"
        />
      </div>
      <div className=" pt-2 pb-12 px-4 lg:basis-1/3">
        <div className=" flex justify-between mb-4 mt-2 items-start">
          <div className="flex flex-col gap-y-2 lg:gap-y-6">
            <RatingStar rate={rating} />
            <p className=" text-white bg-shopBlue dark:bg-shopBlueD py-1 px-2 rounded dark:border dark:border-gray-500">
              {category}
            </p>
          </div>
          <p className=" text-2xl mr-1 dark:text-white">{price}$</p>
        </div>
        <div>
          <p className=" dark:text-white">{description}</p>
        </div>
        <div className="flex gap-x-2 lg:gap-4 justify-center items-center mt-8 tranlate-x-[-30px]">
          <Favorite product={product} inCard={false} />
          <AddToCart product={product} inCard={false} />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
