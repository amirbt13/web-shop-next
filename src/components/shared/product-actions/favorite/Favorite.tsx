import Image from "next/image";
import emptyHeart from "@/public/heart-empty.svg";
import filledHeart from "@/public/heart-filled.svg";

interface Props {
  inCard: boolean;
}

const Favorite: React.FC<Props> = ({ inCard }) => {
  return (
    <div>
      <button>
        <Image
          src={emptyHeart}
          alt="heart"
          className={`${inCard ? "w-6 lg:w-8" : "w-8 lg:w-10"} `}
        />
      </button>
    </div>
  );
};

export default Favorite;
