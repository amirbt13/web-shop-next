import Image from "next/image";
import logo from "@/public/world.svg";
import Link from "next/link";
import Toggle from "src/components/shared/toggle/Toggle";
const Header = () => {
  return (
    <div className="flex justify-between py-1 px-6 bg-shopBlue dark:bg-shopBlueD text-white items-center transition-all">
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="webshop" className=" w-14" />
          <p>WEB SHOP</p>
        </div>
        <Toggle />
      </div>
      <div>
        <ul className="flex gap-4 flex-row-reverse ">
          <li>
            <Link
              href={"/"}
              className=" text-2xl hover:border-b-2 hover:border-white transition-all duration-100 ease-linear "
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className=" text-2xl hover:border-b-2 hover:border-white transition-all duration-100 ease-linear "
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              href={"/cart"}
              className=" text-2xl hover:border-b-2 hover:border-white transition-all duration-100 ease-linear "
            >
              CART
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
