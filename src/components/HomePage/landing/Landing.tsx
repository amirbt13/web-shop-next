import Image from "next/image";
import Carousel from "./carousel/Carousel";
import intro from "@/public/intro.svg";

interface Props {
  handleScroll: Function;
}

const Landing: React.FC<Props> = ({ handleScroll }) => {
  return (
    <div className=" w-full h-[100dvh] bg-shopBlue dark:bg-shopBlueD flex flex-col items-center gap-y-8 lg:flex-row-reverse lg:justify-center lg:px-10 lg:gap-x-8">
      <div className="mt-16 lg:mt-0 lg:w-1/2 ">
        <Image src={intro} alt="intro banner" className=" " />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-white text-6xl m text-center lg:text-8xl">
          WEB SHOP
        </h1>
        <Carousel />
        <button
          onClick={() => handleScroll()}
          className="bg-purple-700 dark:bg-purple-500 text-white text-4xl p-2 rounded-2xl mt-6 font-rubik transition-shadow duration-100 ease-linear hover:shadow-2xl hover:shadow-black lg:text-5xl lg:p-4"
        >
          STORE
        </button>
      </div>
    </div>
  );
};

export default Landing;
