import { cookies } from "next/headers";
import CartPage from "src/components/cart/CartPage";

const Cart = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
    headers: { Cookie: cookies().toString() },
    cache: "no-store",
  });
  const data = await res.json();
  // console.log(data);
  return <CartPage />;
};

export default Cart;
