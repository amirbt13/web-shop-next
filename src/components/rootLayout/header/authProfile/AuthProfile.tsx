"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthProfile = () => {
  const session = useSession();

  return (
    <div>
      <Link
        href={session.data?.user ? "/dashboard" : "/auth/signin"}
        className="text-2xl hover:border-b-2 hover:border-white transition-all duration-100 ease-linear"
      >
        {session.data?.user ? "PROFILE" : "SIGN IN"}
      </Link>
    </div>
  );
};

export default AuthProfile;
