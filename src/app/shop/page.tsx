import { redirect } from "next/navigation";
import React from "react";
import Shop from "src/components/HomePage/shop/Shop";

const page = async ({
  searchParams,
}: {
  searchParams: {
    price: string | string[] | undefined;
    cat: string | string[] | undefined;
    name: string | string[] | undefined;
  };
}) => {
  const { price, cat, name } = searchParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search?${
      price ? "price=" + price + "&" : ""
    }${cat ? "cat=" + cat + "&" : ""}${name ? "name=" + name : ""}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  if (res.status === 200) {
    return <Shop products={data.products} />;
  } else {
    redirect("/");
  }
};

export default page;
