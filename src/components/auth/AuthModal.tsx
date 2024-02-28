"use client";
import { hideSingin } from "@/redux/auth-modal/authModalsSlice";
import Image from "next/image";
import React from "react";

import logo from "@/public/world-inColor.svg";
import arrowleft from "@/public/arrow-left.svg";

import Login from "./Login";
import Signup from "./Signup";
import { useRouter } from "next/navigation";

interface Props {
  signupForm: boolean;
}

const AuthModal: React.FC<Props> = ({ signupForm }) => {
  const router = useRouter();

  return (
    <div className=" fixed top-0 left-0 w-full h-full z-50  backdrop-blur-3xl flex items-center justify-center">
      <div className=" bg-white p-6 rounded-lg flex flex-col gap-6 lg:w-1/5 w-5/6 relative">
        <span
          className=" absolute top-0 left-0 bg-red-500 text-white p-1 text-sm cursor-pointer"
          onClick={() => router.back()}
        >
          <Image src={arrowleft} alt="return" width={20} height={20} />
        </span>
        <div className="flex flex-col items-center gap-8">
          <div>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div>
            <h1 className=" text-2xl">{signupForm ? "SIGN UP" : "SIGN IN"}</h1>
          </div>
        </div>

        {signupForm ? <Signup /> : <Login />}
      </div>
    </div>
  );
};

export default AuthModal;
