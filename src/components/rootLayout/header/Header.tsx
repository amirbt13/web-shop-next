import Image from "next/image";
import logo from "@/public/world.svg";
import Toggle from "src/components/shared/toggle/Toggle";
import BurgerMenu from "./burger/BurgerMenu";
import HeaderLinks from "./links/HeaderLinks";
import AuthProfile from "./authProfile/AuthProfile";
const Header = () => {
  return (
    <div className="flex justify-between py-1 px-2 lg:px-6 bg-shopBlue dark:bg-shopBlueD text-white items-center transition-all  sticky top-0 z-50">
      <div className="@left@ flex items-center lg:gap-5">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="webshop" className=" lg:w-14 w-6" />
          <p className=" text-sm">WEB SHOP</p>
        </div>
        <div className="lg:block hidden">
          <Toggle />
        </div>
      </div>
      <div className="@right@ hidden lg:flex gap-4 items-center">
        <HeaderLinks />
        <AuthProfile />
      </div>
      <div className="@burger@ lg:hidden">
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;
