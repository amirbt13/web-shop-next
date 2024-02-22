"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className=" overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className=" flex-[0_0_100%] min-w-0 text-white text-center font-rubik text-2xl lg:text-3xl">
          Easy to Purchase
        </div>
        <div className=" flex-[0_0_100%] min-w-0 text-white text-center font-rubik text-2xl lg:text-3xl">
          In All Categories
        </div>
        <div className=" flex-[0_0_100%] min-w-0 text-white text-center font-rubik text-2xl lg:text-3xl">
          Free Shipping
        </div>
      </div>
    </div>
  );
};

export default Carousel;
