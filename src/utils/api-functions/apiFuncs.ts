import { CartProductType } from "@/types/product";
import prisma from "../prisma/prisma";

export const createCartItem = async (item: CartProductType, cartId: string) => {
  const newCartItem = await prisma.cartItem.create({
    data: { productId: item.id, quantity: item.quantity, cartId: cartId },
  });
  return newCartItem;
};
