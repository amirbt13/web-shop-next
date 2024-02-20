import Image from "next/image";
import Carousel from "./carousel/Carousel";
import intro from "@/public/intro.svg";

const Landing = () => {
  return (
    <div className=" w-full h-[100dvh] bg-shopBlue dark:bg-shopBlueD flex flex-col items-center gap-y-8">
      <div className="mt-16">
        <Image src={intro} alt="intro banner" />
      </div>
      <h1 className="text-white text-6xl m text-center">WEB SHOP</h1>
      <Carousel />
      <button className="bg-purple-700 dark:bg-purple-500 text-white text-4xl p-2 rounded-2xl mt-6 font-rubik transition-shadow duration-100 ease-linear hover:shadow-2xl hover:shadow-black">
        STORE
      </button>
    </div>
  );
};

export default Landing;
