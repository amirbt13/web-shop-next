import { Product } from "@/types/product";
import HomePage from "src/components/HomePage/HomePage";

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();

  return <HomePage products={data} />;
}
