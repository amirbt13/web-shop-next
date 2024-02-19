import { Product } from "@/types/product";
import Landing from "./landing/Landing";
import Shop from "./shop/Shop";

interface Props {
  products: Product[];
}

const HomePage: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <Landing />
      <Shop />
    </div>
  );
};

export default HomePage;
