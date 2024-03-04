import Products from "src/components/products/Products";
import Product from "../../shared/product/Product";

import { ProductType } from "@/types/product";

interface Props {
  products: ProductType[];
}

const Shop: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Shop;
