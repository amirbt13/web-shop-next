import starFilled from "@/public/star-filled.svg";
import starEmpty from "@/public/star-empty.svg";
import Image from "next/image";

interface Props {
  rate: number;
}
const RatingStar: React.FC<Props> = ({ rate }) => {
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
            src={starEmpty}
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
