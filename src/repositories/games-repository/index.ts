import prisma from "../../database/db";

async function findUserChampionshipId(championshipsId: number) {
  return prisma.championship.findUnique({
    where: {
      id: championshipsId
    }
  });
};

async function createGames(games: any) {
  return prisma.games.createMany({
    data: games
  })
}

async function findTeamsByChampionshipId(championshipsId: number) {
  return prisma.team.findMany({
    where: {
      championshipsId,
    }
  })
}

async function getGamesByChampionshipId(championshipsId: number) {
  const games = await prisma.games.findMany({
    where: {
      championshipsId,
    },
  });
  return games;
}

const gamesRepository = {
  findUserChampionshipId,
  createGames,
  findTeamsByChampionshipId,
  getGamesByChampionshipId
};

export default gamesRepository;