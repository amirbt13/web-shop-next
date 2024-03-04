import prisma from "@/utils/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,

  { params }: { params: { productID: string } }
) {
  try {
    const productID = +params.productID;
    const product = await prisma.product.findUnique({
      where: { id: productID },
    });
    if (!product) {
      return NextResponse.json({ error: "product not found" }, { status: 404 });
    }
    return NextResponse.json({ product }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server errror" },
      { status: 500 }
    );
  }
}
