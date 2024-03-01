import { CartProductType, ProductType } from "@/types/product";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/utils/prisma/prisma";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "login into your account" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    let cart = await prisma.cart.findFirst({ where: { userId: user.id } });

    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: user.id } });
    }
    const cartItems = await prisma.cartItem.findMany({
      where: { cartId: cart.id },
      include: {
        product: true,
      },
    });
    // typings should be clean
    const cartItemsFinal = cartItems.map(
      (ci: {
        id: string;
        cartId: string;
        productId: number;
        quantity: number;
        product: {
          id: number;
          title: string;
          price: number;
          description: string;
          category: string;
          image: string;
          rating: number;
        };
      }) => {
        return {
          ...ci.product,
          quantity: ci.quantity,
        };
      }
    );
    return NextResponse.json({ cartItemsFinal }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "login into your account" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    const { items } = await req.json();

    let cart = await prisma.cart.findUnique({ where: { userId: user.id } });

    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: user.id } });
    }
    const cartId = cart.id;
    const itemsReady = items.map((i: CartProductType) => {
      return {
        productId: i.id,
        cartId,
        quantity: i.quantity,
      };
    });
    const deletedItems = await prisma.cartItem.deleteMany({
      where: { cartId: cartId },
    });
    const newCartItems = await prisma.cartItem.createMany({ data: itemsReady });

    if (!newCartItems) {
      return NextResponse.json(
        { error: "something went wrong saving cart" },
        { status: 500 }
      );
    }

    return NextResponse.json({ newCartItems }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
