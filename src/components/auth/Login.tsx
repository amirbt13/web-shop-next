"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Login = () => {
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
      router.replace("/");
    }
  };
  return (
    <div>
      <div></div>
      <div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
      </div>
      <div>
        <button onClick={login}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
