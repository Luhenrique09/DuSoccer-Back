import prisma from "../../database/db";

async function create(data: any) {
  return prisma.session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
