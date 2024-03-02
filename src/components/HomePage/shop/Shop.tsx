import Product from "./product/Product";
import { Products } from "@/types/products";

const Shop: React.FC<Products> = ({ products }) => {
  return (
    <div>
      <div className="@products@ grid-cols-2 grid gap-6 lg:gap-8 lg:mt-12 m-4 lg:m-8  lg:grid-cols-4">
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
