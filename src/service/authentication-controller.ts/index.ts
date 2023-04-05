import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sessionRepository from "../../repositories/session-repository";
import userRepository from "../../repositories/user-repository";
import { number } from "joi";
import { notFoundError } from "../teams-service/error";

async function signIn(params: any) {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: user,
    token,
  };
}

async function getUserOrFail(email: string){
  const user = await userRepository.findByEmail(email);
  if (!user) throw {name: "erro"};

  return user;
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, `${process.env.JWT_SECRET}`/* , { expiresIn: '2h' } */);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw  notFoundError("password");
}

async function deleteSession(token: string) {
  const session = await sessionRepository.findOne(token);
  if(!session){
    throw notFoundError("session");
  }

  await sessionRepository.deleteSession(token)
 
}

const authenticationService = {
  signIn,
  deleteSession
};

export default authenticationService;
