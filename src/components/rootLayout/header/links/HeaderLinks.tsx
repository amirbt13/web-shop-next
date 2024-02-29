import Link from "next/link";

const HeaderLinks = () => {
  return (
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
  );
};

export default HeaderLinks;
