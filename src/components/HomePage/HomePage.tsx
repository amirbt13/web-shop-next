"use client";
import { Product } from "@/types/product";
import Landing from "./landing/Landing";
import Shop from "./shop/Shop";
import { useEffect, useRef, useState } from "react";

interface Props {
  products: Product[];
}

const HomePage: React.FC<Props> = ({ products }) => {
  const [activeSection, setActiveSection] = useState(null);

  const initRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (initRef.current) {
      initRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Landing handleScroll={handleScroll} />
      <div ref={initRef}>
        <Shop />
      </div>
    </div>
  );
};

export default HomePage;
