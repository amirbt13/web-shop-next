"use client";
import starFilled from "@/public/star-filled.svg";
import starEmpty from "@/public/star-empty.svg";
import starEmptyWhite from "@/public/star-empty-white.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Store } from "@/types/store/storeType";

interface Props {
  rate: number;
}
const RatingStar: React.FC<Props> = ({ rate }) => {
  const darkMode = useSelector((state: Store) => state.darkMode.value);
  const roundedRate = Math.round(rate);

  return (
    <div className="flex">
      {[...Array(roundedRate)].map((item, index) => {
        return (
          <Image
            key={index}
            src={starFilled}
            alt="star"
            width={18}
            height={18}
          />
        );
      })}
      {[...Array(5 - roundedRate)].map((item, index) => {
        return (
          <Image
            key={index}
            src={darkMode ? starEmptyWhite : starEmpty}
            alt="star"
            width={20}
            height={20}
          />
        );
      })}
    </div>
  );
};

export default RatingStar;
