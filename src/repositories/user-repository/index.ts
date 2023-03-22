import prisma from "../../database/db";

async function findByEmail(email: string) {
 return prisma.users.findUnique({
  where:{
    email:email
  }
 });
}

async function createUser(data: any) {
   return prisma.users.create({
    data,
   })
}

const userRepository = {
  findByEmail,
  createUser,
};

export default userRepository;