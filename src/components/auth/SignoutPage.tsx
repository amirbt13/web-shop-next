"use client";

import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const SignoutPage = () => {
  useEffect(() => {
    signOut();
  }, []);
  return null;
};

export default SignoutPage;
