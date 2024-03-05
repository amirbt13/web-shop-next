"use client";

import { insertBulk } from "@/redux/cart/cartSlice";
import { signinValidation } from "@/utils/validations/auth/authValidations";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export interface SinginForm {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState<SinginForm>({
    email: "",
    password: "",
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
  const login = async () => {
    const formErrorsArr = Object.entries(signinValidation(form));
    if (formErrorsArr.length) {
      formErrorsArr.reverse().forEach((err) => toast.error(err[1]));
      return;
    }
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    if (!res) {
      toast.error("Error in proccesing request");
      return;
    }
    if (res?.error) {
      toast.error(res.error);
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`);
      const data = await res.json();
      if (res.status === 200) {
        // console.log("fetched");
        dispatch(insertBulk(data.cart));
        toast.success("logged in 😃");

        router.replace("/");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className=" flex flex-col gap-1">
          <label>Email</label>
          <input
            className=" border border-gray-300 rounded-lg p-1 text-black"
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
            onKeyUp={handleKeyPress}
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Password</label>
          <input
            className=" border border-gray-300 rounded-lg p-1 text-black"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <button
          ref={ref}
          className=" bg-shopBlue text-white py-1 px-3 rounded-md text-xl"
          onClick={login}
        >
          LOGIN
        </button>
        <button
          className="border-b border-gray-700 text-gray-900 text-sm dark:text-gray-200"
          onClick={() => router.push("/auth/signup")}
        >
          Signup
        </button>
      </div>
    </>
  );
};

export default Login;
