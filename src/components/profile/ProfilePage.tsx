"use client";
import { Profile } from "@/types/profile";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface Props {
  profile: Profile;
}

const ProfilePage: React.FC<Props> = ({ profile }) => {
  const { name, lastname, email, createdAt } = profile;
  return (
    <div className="p-2 h-full dark:text-white flex flex-col justify-between pb-4">
      <div className=" flex flex-col gap-2">
        <h1 className=" text-4xl ">{name ? `Hi ${name} 👋🏻` : email}</h1>
        <p>join date: {new Date(createdAt).toDateString()}</p>
      </div>
      <div className=" grid grid-cols-2 gap-3 ">
        <div className=" border-4 dark:border-white border-slate-600 rounded flex items-center justify-center py-2">
          <Link
            href={"/cart"}
            className="flex items-center justify-center border-4 dark:border-white border-slate-600 h-32 w-32 rounded-[50%] p-2 "
          >
            CART
          </Link>
        </div>
        <div className=" border-4 dark:border-white border-slate-600 rounded flex items-center justify-center py-2">
          <Link
            href={"/profile/faves"}
            className="flex items-center justify-center border-4 dark:border-white border-slate-600 h-32 w-32 rounded-[50%] p-2"
          >
            FAVORITES
          </Link>
        </div>
        <div className=" border-4 dark:border-white border-slate-600 rounded flex items-center justify-center py-2">
          <Link
            href={"/profile/info"}
            className="flex items-center justify-center border-4 dark:border-white border-slate-600 h-32 w-32 rounded-[50%] p-2 "
          >
            INFORMATION
          </Link>
        </div>
        <div className=" border-4 dark:border-white border-slate-600 rounded flex items-center justify-center py-2">
          <button
            // href={"/auth/signout"}
            onClick={() => signOut({ callbackUrl: "/", redirect: true })}
            className="flex items-center justify-center border-4 dark:border-white border-slate-600 h-32 w-32 rounded-[50%] p-2"
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
