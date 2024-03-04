import React from "react";
import Product from "../shared/product/Product";
import { ProductType } from "@/types/product";

interface Props {
  products: ProductType[];
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className="@products@ grid-cols-2 grid gap-6 lg:gap-8 lg:mt-12 m-4 lg:m-8  lg:grid-cols-4">
      {!products.length ? (
        <p>no products are availabe</p>
      ) : (
        products.map((p) => <Product key={p.id} product={p} />)
      )}
    </div>
  );
};

export default Products;
