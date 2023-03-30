import bcrypt from "bcrypt";
import userRepository from "../repositories/user-repository";

async function createUser({ name, email, password } : any) {

  await validateEmail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = {
    name,
    email,
    password: hashedPassword
  }
  const createdUser =  await userRepository.createUser(user);

  return createdUser;
}

async function validateEmail(email: string) {
  const userEmail = await userRepository.findByEmail(email);
  if (userEmail) {
    throw {name: "CONFLICT"}
  }
}

const userService = {
  createUser,
};

export default userService;