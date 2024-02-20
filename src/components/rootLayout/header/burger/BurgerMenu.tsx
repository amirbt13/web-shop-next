"use client";

import Image from "next/image";
import burger from "@/public/burger-menu.svg";
import { useState } from "react";
import Link from "next/link";
import Toggle from "src/components/shared/toggle/Toggle";
const BurgerMenu = () => {
  const [burgerShow, setBurgerShow] = useState(false);
  return (
    <div>
      <div onClick={() => setBurgerShow(true)}>
        <Image src={burger} alt="burger menu" className="w-10 cursor-pointer" />
      </div>
      <div
        className={`absolute top-0 left-0 bg-shopBlue dark:bg-shopBlueD text-white w-full flex justify-between p-2 ${
          burgerShow ? " translate-y-[0%]" : " translate-y-[-100%] "
        } transition-all duration-200 ease-in-out border-b border-white`}
      >
        <ul className="flex flex-col gap-2 py-4 px-2">
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/contact"}>CONTACT US</Link>
          </li>
          <li>
            <Link href={"/cart"}>CART</Link>
          </li>
        </ul>
        <div className="flex flex-col items-end justify-between">
          <div
            className=" bg-red-600 p-1 rounded text-sm cursor-pointer"
            onClick={() => setBurgerShow(false)}
          >
            close X
          </div>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
