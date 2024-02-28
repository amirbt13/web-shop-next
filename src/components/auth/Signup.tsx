import { showSignin } from "@/redux/auth-modal/authModalsSlice";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const register = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
      {
        method: "POST",
        body: JSON.stringify({ email: form.email, password: form.password }),
      }
    );
    const data = await res.json();
    if (res.status === 201) {
      dispatch(showSignin());
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
            className="border border-gray-300 rounded-lg p-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            className="border border-gray-300 rounded-lg p-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Repeat Password</label>
          <input
            type="password"
            name="rePassword"
            value={form.rePassword}
            onChange={changeHandler}
            className="border border-gray-300 rounded-lg p-1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <button
          className=" bg-shopBlue text-white py-1 px-3 rounded-md text-xl"
          onClick={register}
        >
          REGISTER
        </button>
        <button
          className="border-b border-gray-700 text-gray-900"
          onClick={() => dispatch(showSignin())}
        >
          sign in
        </button>
      </div>
    </>
  );
};

export default Signup;
