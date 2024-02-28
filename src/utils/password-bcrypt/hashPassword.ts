import { hash } from "bcryptjs";

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

export default hashPassword;
