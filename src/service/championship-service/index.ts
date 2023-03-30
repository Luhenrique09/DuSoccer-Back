import championshipRepository from "../../repositories/championship-repository";

async function createChampionship(name: string, numTeam: number, returnPlay: boolean, userId: number) {

  const data = {
    name,
    numTeam,
    returnPlay,
    owner: userId,
  }
  const result = await championshipRepository.createChampionship(data)

  return result;
}

const championshipService = {
  createChampionship
}

export default championshipService