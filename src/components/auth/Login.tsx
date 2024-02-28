"use client";

import { hideSingin, showSignup } from "@/redux/auth-modal/authModalsSlice";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const login = async () => {
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    if (!res) {
      console.log("Error in proccesing request");
      return;
    }
    if (res?.error) {
      console.log(res.error);
    } else {
      console.log("success");
      dispatch(hideSingin());
      router.replace("/");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className=" flex flex-col gap-1">
          <label>Email</label>
          <input
            className=" border border-gray-300 rounded-lg p-1"
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label>Password</label>
          <input
            className=" border border-gray-300 rounded-lg p-1"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <button
          className=" bg-shopBlue text-white py-1 px-3 rounded-md text-xl"
          onClick={login}
        >
          LOGIN
        </button>
        <button
          className="border-b border-gray-700 text-gray-900 text-sm"
          onClick={() => dispatch(showSignup())}
        >
          have an account ? Signup
        </button>
      </div>
    </>
  );
};

export default Login;
