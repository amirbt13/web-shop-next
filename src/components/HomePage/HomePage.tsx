"use client";
import { ProductType } from "@/types/product";
import Landing from "./landing/Landing";
import Shop from "./shop/Shop";
import { useEffect, useRef } from "react";
import { Products } from "@/types/products";

const HomePage: React.FC<Products> = ({ products }) => {
  const initRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (initRef.current) {
      initRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div>
      <Landing handleScroll={handleScroll} />
      <div ref={initRef}>
        <Shop products={products} />
      </div>
    </div>
  );
};

export default HomePage;
