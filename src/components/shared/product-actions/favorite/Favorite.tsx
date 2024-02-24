"use client";
import Image from "next/image";
import emptyHeart from "@/public/heart-empty.svg";
import filledHeart from "@/public/heart-filled.svg";
import { useSelector } from "react-redux";
import { Store } from "@/types/store/storeType";
import { ProductType } from "@/types/product";
import { useDispatch } from "react-redux";
import { addToFaves, removeFromFaves } from "@/redux/favorites/favoritesSlice";

interface Props {
  inCard: boolean;
  product: ProductType;
}

const Favorite: React.FC<Props> = ({ inCard, product }) => {
  const favorites = useSelector((state: Store) => state.favorites.items);
  const dispatch = useDispatch();
  const isFaved = favorites.find((item) => item.id === product.id);
  return (
    <div>
      <button
        onClick={() =>
          isFaved
            ? dispatch(removeFromFaves(product.id))
            : dispatch(addToFaves(product))
        }
      >
        <Image
          src={isFaved ? filledHeart : emptyHeart}
          alt="heart"
          className={`${inCard ? "w-6 lg:w-8" : "w-8 lg:w-10"} `}
        />
      </button>
    </div>
  );
};

export default Favorite;
