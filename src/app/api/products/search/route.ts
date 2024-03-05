export const dynamic = "force-dynamic";
import { ProductType } from "@/types/product";
import prisma from "@/utils/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    // console.log(searchParams);
    const price = searchParams.get("price");
    const category = searchParams.get("cat");
    const name = searchParams.get("name");

    // price and category and name
    if (price && category && name) {
      const [minPrice, maxPrice] = price.split("-");
      const products = await prisma.product.findMany({
        where: {
          price: { lte: +maxPrice, gte: +minPrice },
          category: category,
          title: { contains: name },
        },
      });
      console.log("products when p & c & n:", products);
      if (!products) {
        return NextResponse.json(
          { message: "no items found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ products }, { status: 200 });
    }

    // price and category
    if (price && category && !name) {
      const [minPrice, maxPrice] = price.split("-");
      const products = await prisma.product.findMany({
        where: {
          price: { lte: +maxPrice, gte: +minPrice },
          category: category,
        },
      });
      console.log("products when p & c :", products);
      if (!products) {
        return NextResponse.json(
          { message: "no items found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ products }, { status: 200 });
    }

    // price and name
    if (price && name && !category) {
      const [minPrice, maxPrice] = price.split("-");
      const products = await prisma.product.findMany({
        where: {
          price: { lte: +maxPrice, gte: +minPrice },
          title: { contains: name },
        },
      });
      if (!products) {
        return NextResponse.json(
          { message: "no items found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ products }, { status: 200 });
    }

    // only price
    if (price && !category && !name) {
      const [minPrice, maxPrice] = price.split("-");
      const products = await prisma.product.findMany({
        where: { price: { lte: +maxPrice, gte: +minPrice } },
      });
      if (!products) {
        return NextResponse.json(
          { message: "no items found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ products }, { status: 200 });
    }

    // category and name
    if (category && name && !price) {
      const products = await prisma.product.findMany({
        where: { category: category, title: { contains: name } },
      });
      if (!products) {
        return NextResponse.json(
          { message: "no items found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ products }, { status: 200 });
    }

    // only category
    if (category && !price && !name) {
      const products = await prisma.product.findMany({
        where: { category: category },
      });
      console.log("products when c:", products);
      if (!products) {
        return NextResponse.json(
          { message: "no items found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ products }, { status: 200 });
    }

    // only name
    if (name && !category && !price) {
      const products = await prisma.product.findMany({
        where: { title: { contains: name } },
      });
      if (!products) {
        return NextResponse.json(
          { message: "no items found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ products }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
