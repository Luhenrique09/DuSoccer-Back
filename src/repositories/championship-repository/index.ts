import prisma from "../../database/db";
import { TeamData } from "../../service/championship-service";

async function createChampionship(data: TeamData) {
  return prisma.championship.create({
    data,
  });
};

async function findChampionship() {
  return prisma.championship.findMany({
    include: {
      owner: {
        select: {
          name: true,
          email: true
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
    }, select: {
      id: true,
      name: true,
      image: true,
      numTeam: true,
      returnPlay: true,
      owner: {
        select: {
          name: true,
          email: true
        }
      }, teams: {
        select: {
          name: true,

        }
      }
    }
  })
}

async function findUser(userId: number) {
  return prisma.users.findUnique({
    where: {
      id: userId
    }
  })
}

async function deleteChampionship(id:number) {
    // Verifica se há times associados ao campeonato
    const teams = await prisma.team.findMany({
      where: { championshipsId: id },
    });

    // Se houver times associados, exclui os jogos e times antes do campeonato
    if (teams.length > 0) {
      for (const team of teams) {
        // Exclui os jogos associados ao time
        await prisma.games.deleteMany({
          where: {
            OR: [
              { manderId: team.id },
              { visitorId: team.id },
            ],
          },
        });
        
        // Exclui o time
        await prisma.team.delete({
          where: { id: team.id },
        });
      }
    }

    // Exclui o campeonato
    await prisma.championship.delete({
      where: { id },
    });

    return true;

}


const championshipRepository = {
  createChampionship,
  findUserChampionshipId,
  findChampionship,
  findUser,
  deleteChampionship
};

export default championshipRepository;