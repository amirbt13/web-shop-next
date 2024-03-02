import prisma from "@/utils/prisma/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

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
    const userWithoutPass = { ...user, hashedPassword: "" };

    return NextResponse.json({ user: userWithoutPass }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
