import prisma from "../../database/db";

async function createChampionship(data: any) {
  return prisma.championship.create({
    data,
  });
};

const championshipRepository = {
  createChampionship
};

export default championshipRepository;