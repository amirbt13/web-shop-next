import type { ProductType } from "@/types/product";
import Product from "./product/Product";

interface Props {
  products: ProductType[];
}

const Shop: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <div className="@products@ grid-cols-2 grid gap-6 m-4 ">
        {!products.length ? (
          <p>no products are availabe</p>
        ) : (
          products.map((p) => <Product key={p.id} product={p} />)
        )}
      </div>
    </div>
  );
};

export default Shop;
