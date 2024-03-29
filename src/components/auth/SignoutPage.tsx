"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const SignoutPage = () => {
  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  }, []);
  return null;
};

export default SignoutPage;
