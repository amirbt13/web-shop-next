import { ProductType } from "@/types/product";
import { Products } from "@/types/products";
import catchLog from "@/utils/catchLog";
import HomePage from "src/components/HomePage/HomePage";

export default async function Home() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        cache: "no-store",
      }
    );
    const data: Products = await res.json();
    // console.log(data);
    return <HomePage products={data.products} />;
  } catch (err) {
    catchLog("app/page.tsx", err);
  }
}
