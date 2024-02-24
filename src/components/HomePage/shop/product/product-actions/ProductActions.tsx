import { ProductType } from "@/types/product";
import AddToCart from "src/components/shared/product-actions/add-to-cart/AddToCart";
import Favorite from "src/components/shared/product-actions/favorite/Favorite";

interface Props {
  product: ProductType;
}

const ProductActions: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <Favorite product={product} inCard={true} />
      <AddToCart product={product} inCard={true} />
    </div>
  );
};

export default ProductActions;
