import { SinginForm } from "src/components/auth/Login";
import { SingupForm } from "src/components/auth/Signup";

interface Errors {
  email?: string;
  password?: string;
  rePassword?: string;
}

export const signinValidation = (form: SinginForm) => {
  const errors: Errors = {};

  const { email, password } = form;

  if (!email.trim()) {
    errors.email = "Please enter your email";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    errors.email = "Please enter a valid email";
  } else {
    delete errors.email;
  }

  if (!password.trim()) {
    errors.password = "Please enter your password";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else {
    delete errors.password;
  }

  return errors;
};

export const signupValidation = (form: SingupForm) => {
  const errors: Errors = {};

  const { email, password, rePassword } = form;

  if (!email.trim()) {
    errors.email = "Please enter your email";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    errors.email = "Please enter a valid email";
  } else {
    delete errors.email;
  }

  if (!password.trim()) {
    errors.password = "Please enter your password";
  } else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
    errors.password =
      "Password must be at least 8 characters \n Contain at least 1 uppercase letter \n Contain at least 1 number";
  } else {
    delete errors.password;
  }

  if (!rePassword.trim()) {
    errors.rePassword = "Please enter repeat password";
  } else if (rePassword !== password) {
    errors.rePassword = "Password and repeated password do not match";
  } else {
    delete errors.rePassword;
  }

  return errors;
};
