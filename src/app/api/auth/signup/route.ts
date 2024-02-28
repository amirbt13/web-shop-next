import hashPassword from "@/utils/password-bcrypt/hashPassword";
import prisma from "@/utils/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json({ error: "bad request" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });

    if (user)
      return NextResponse.json(
        { error: "user already exist" },
        { status: 422 }
      );

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: { email, hashedPassword },
    });

    if (!newUser)
      return NextResponse.json({ error: "register failed" }, { status: 500 });

    return NextResponse.json({ newUser }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
