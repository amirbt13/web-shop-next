import catchLog from "@/utils/catchLog";
import ProductsDetailsPage from "src/components/products/product-details/ProductsDetailsPage";

const ProductDetails = async ({
  params,
}: {
  params: { productID: string };
}) => {
  try {
    const { productID } = params;

    const res = await fetch(`${process.env.BASE_URL}/products/${productID}`, {
      cache: "no-store",
    });
    const data = await res.json();

    return <ProductsDetailsPage product={data} />;
  } catch (err) {
    catchLog("products/[productID]/page.tsx", err);
  }
};

export default ProductDetails;
