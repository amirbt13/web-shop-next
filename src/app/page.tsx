import catchLog from "@/utils/catchLog";
import HomePage from "src/components/HomePage/HomePage";

export default async function Home() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const data = await res.json();

    return <HomePage products={data} />;
  } catch (err) {
    catchLog("app/page.tsx", err);
  }
}
