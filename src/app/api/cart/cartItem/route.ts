import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from "@/utils/prisma/prisma";

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
    let cart = await prisma.cart.findUnique({ where: { userId: user.id } });

    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: user.id } });
    }
    const cartItems = await prisma.cartItem.findMany({
      where: { cartId: cart.id },
      select: { productId: true, id: true, quantity: true },
    });
    const { productId } = await req.json();
    const cartItem = cartItems.find(
      (item: { productId: number }) => item.productId === productId
    );
    if (cartItem) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity + 1 },
      });
      return NextResponse.json({ updatedItem }, { status: 200 });
    }
    const newCartItem = await prisma.cartItem.create({
      data: { cartId: cart.id, productId: productId, quantity: 1 },
    });
    return NextResponse.json({ newCartItem }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  res: NextResponse,
  { params }: { params: { id: number } }
) {
  try {
    const id = params.id;

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
    let cart = await prisma.cart.findUnique({ where: { userId: user.id } });
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: user.id } });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: { productId: id, cartId: cart.id },
    });
    if (!cartItem) {
      return NextResponse.json(
        { error: "item not found in cart" },
        { status: 404 }
      );
    }
    if (cartItem.quantity === 1) {
      const deletedItem = await prisma.cartItem.delete({
        where: { id: cartItem.id },
      });
      return NextResponse.json(
        { message: "item deleted form cart" },
        { status: 204 }
      );
    }
    if (cartItem.quantity > 1) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity - 1 },
      });
      return NextResponse.json({ updatedItem }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
