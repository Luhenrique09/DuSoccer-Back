import prisma from "../../database/db";

async function create(data: any) {
  return prisma.session.create({
    data,
  });
}

async function findOne(token: string) {
  return prisma.session.findFirst({
    where: {
      token,
    }
  })
}

async function deleteSession(token: string) {
  return prisma.session.deleteMany({
    where: {
      token,
    }
  });
}

const sessionRepository = {
  create,
  deleteSession,
  findOne
};

export default sessionRepository;
