import prisma from "../../database/db";

async function createChampionship(data: any) {
  return prisma.championship.create({
    data,
  });
};

async function findChampionship() {
  return prisma.championship.findMany({
    include: {
      owner: {
        select:{
          name:true,
          email:true
        }
      }
    },
    orderBy: {
      name: 'asc'
    }, 
  }); 
}

async function findUserChampionshipId(userId: number) {
  return prisma.championship.findMany({
    where: {
      ownerId: userId
    }
  })
}

const championshipRepository = {
  createChampionship,
  findUserChampionshipId,
  findChampionship
};

export default championshipRepository;