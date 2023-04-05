import championshipRepository from "../../repositories/championship-repository";
import { notFoundError } from "../teams-service/error";

async function createChampionship(name: string, numTeam: number, returnPlay: boolean, userId: number) {

  const data = {
    name,
    numTeam,
    returnPlay,
    ownerId: userId,
  }

  const user = await championshipRepository.findUser(userId)
  if(!user) throw notFoundError("user");

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