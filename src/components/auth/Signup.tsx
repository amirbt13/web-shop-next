"use client";

import { signupValidation } from "@/utils/validations/auth/authValidations";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

export interface SingupForm {
  email: string;
  password: string;
  rePassword: string;
}

const Signup = () => {
  const router = useRouter();
  const [form, setForm] = useState<SingupForm>({
    email: "",
    password: "",
    rePassword: "",
  });
  const ref = useRef<HTMLButtonElement>(null);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      ref.current?.click();
    }
  };
  const register = async () => {
    const formErrorsArr = Object.entries(signupValidation(form));
    if (formErrorsArr.length) {
      formErrorsArr.reverse().forEach((err) => toast.error(err[1]));
      return;
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
      {
        method: "POST",
        body: JSON.stringify({ email: form.email, password: form.password }),
      }
    );
    const data = await res.json();
    if ("error" in data) {
      toast.error(data.error);
    }
    if (res.status === 201) {
      toast.success("registered successfully");
      router.replace("/auth/signin");
    }
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
            className="border border-gray-300 rounded-lg p-1 text-black"
            onKeyUp={handleKeyPress}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            className="border border-gray-300 rounded-lg p-1 text-black"
            onKeyUp={handleKeyPress}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Repeat Password</label>
          <input
            type="password"
            name="rePassword"
            value={form.rePassword}
            onChange={changeHandler}
            className="border border-gray-300 rounded-lg p-1 text-black"
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <button
          ref={ref}
          className=" bg-shopBlue text-white py-1 px-3 rounded-md text-xl"
          onClick={register}
        >
          REGISTER
        </button>
        <button
          className="border-b border-gray-700 text-gray-900 dark:text-gray-200 text-sm"
          onClick={() => router.push("/auth/signin")}
        >
          already have an account ? sign in
        </button>
      </div>
    </>
  );
};

export default Signup;
