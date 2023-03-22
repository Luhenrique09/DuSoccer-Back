import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sessionRepository from "../../repositories/session-repository";
import userRepository from "../../repositories/user-repository";

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
  const token = jwt.sign({ userId }, process.env.JWT_SECRET || "ufh4745nfg8858u4ne883y3ber8");
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw  {name: "erro"};
}

const authenticationService = {
  signIn,
};

export default authenticationService;
