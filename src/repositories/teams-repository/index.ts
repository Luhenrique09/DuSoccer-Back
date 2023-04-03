import prisma from "../../database/db";

async function createTeam(data: Data) {
  return prisma.team.create({
    data,
  });
};

async function findChampionshipById(championshipsId: number) {
  return await prisma.championship.findUnique({
    where: {
      id: championshipsId
    }, select: {
      numTeam: true
    }
  })
}

async function findAllTemasByIdChampionship(championshipsId: number) {
  return await prisma.team.findMany({
    where: {
      championshipsId: championshipsId
    }
  })
}

async function findTeamsChampionshipById(championshipsId: number) {
  return await prisma.team.findMany({
    where: {
      championshipsId,
    }
  });
};

type Data = {
  name: string,
  championshipsId: number
}

const teamsRepository = {
  createTeam,
  findChampionshipById,
  findAllTemasByIdChampionship,
  findTeamsChampionshipById
}

export default teamsRepository;