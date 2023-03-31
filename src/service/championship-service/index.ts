import championshipRepository from "../../repositories/championship-repository";

async function createChampionship(name: string, numTeam: number, returnPlay: boolean, userId: number) {

  const data = {
    name,
    numTeam,
    returnPlay,
    ownerId: userId,
  }
  const result = await championshipRepository.createChampionship(data)

  return result;
}

async function getChampionship() {
  const result = await championshipRepository.findChampionship();

  return result;
}


async function getUserChampionshipId(userId: number) {
  const result = await championshipRepository.findUserChampionshipId(userId)

  return result;
}

const championshipService = {
  createChampionship,
  getChampionship,
  getUserChampionshipId
}

export default championshipService