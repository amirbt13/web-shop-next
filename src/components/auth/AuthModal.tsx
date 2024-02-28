"use client";
import { hideSingin } from "@/redux/auth-modal/authModalsSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import logo from "@/public/world-inColor.svg";
import arrowleft from "@/public/arrow-left.svg";
import { useSelector } from "react-redux";
import { Store } from "@/types/store/storeType";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = () => {
  const showModal = useSelector((state: Store) => state.authModals.showModal);
  const signinForm = useSelector((state: Store) => state.authModals.signin);
  const signupForm = useSelector((state: Store) => state.authModals.signup);
  const dispatch = useDispatch();
  if (showModal) {
    return (
      <div className=" fixed top-0 left-0 w-full h-full z-50  backdrop-blur-3xl flex items-center justify-center">
        <div className=" bg-white p-6 rounded-lg flex flex-col gap-6 lg:w-1/5 w-5/6 relative">
          <span
            className=" absolute top-0 left-0 bg-red-500 text-white p-1 text-sm cursor-pointer"
            onClick={() => dispatch(hideSingin())}
          >
            <Image src={arrowleft} alt="return" width={20} height={20} />
          </span>
          <div className="flex flex-col items-center gap-8">
            <div>
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <div>
              <h1 className=" text-2xl">
                {signinForm ? "SIGN IN" : null} {signupForm ? "SIGN UP" : null}
              </h1>
            </div>
          </div>
          {signinForm ? <Login /> : null}
          {signupForm ? <Signup /> : null}
          {/* {signinForm ? (
            <p>
              do not you have an account? <button>sign up</button>
            </p>
          ) : (
            <button className=" border-b border-gray-700 w-max">sign in</button>
          )} */}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AuthModal;
