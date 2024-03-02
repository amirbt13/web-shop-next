import prisma from "@/utils/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const products = await prisma.product.findMany({});
    if (!products) {
      return NextResponse.json({ error: "no products found" }, { status: 404 });
    }
    return NextResponse.json({ products }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
