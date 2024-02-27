import { verifyPassword } from "@/utils/password-bcrypt/verifyPassword";
import prisma from "@/utils/prisma/prisma";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

interface CustomCredentials {
  email: string;
  password: string;
}

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials as CustomCredentials;
        if (!email || !password) {
          throw new Error("Bad Request");
        }
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) {
          throw new Error("Account Not Found");
        }
        const isValid = await verifyPassword(password, user.hashedPassword);

        if (!isValid) {
          throw new Error("Wrong Email Or Password");
        }
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
