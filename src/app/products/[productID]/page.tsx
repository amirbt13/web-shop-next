import catchLog from "@/utils/catchLog";
import { notFound } from "next/navigation";
import ProductsDetailsPage from "src/components/products/product-details/ProductsDetailsPage";

const ProductDetails = async ({
  params,
}: {
  params: { productID: string };
}) => {
  // try {
  const { productID } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productID}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  if (res.status === 200) {
    return <ProductsDetailsPage product={data.product} />;
  } else {
    notFound();
  }
  // } catch (err) {
  //   catchLog("products/[productID]/page.tsx", err);
  // }
};

export default ProductDetails;
