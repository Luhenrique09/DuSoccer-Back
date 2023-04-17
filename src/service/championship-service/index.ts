import championshipRepository from "../../repositories/championship-repository";
import { notFoundError } from "../teams-service/error";

async function createChampionship(name: string, numTeam: number, returnPlay: boolean, userId: number, image: string) {

  const data : TeamData = {
    name,
    numTeam,
    returnPlay,
    ownerId: userId,
    image,
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
  const user = await championshipRepository.findUser(userId)
  if(!user) throw notFoundError("user");
  
  const result = await championshipRepository.findUserChampionshipId(userId)

  return result;
}

export async function deleteChampionship(championshipId: number, userId: number) {
  const championship = await championshipRepository.findUserChampionshipId(userId);
  if(!championship) throw notFoundError("championship");

  const result = championshipRepository.deleteChampionship(championshipId)

  return result;
}

export type TeamData = {
  name: string,
  numTeam: number,
  returnPlay: boolean,
  ownerId: number,
  image: string
}


const championshipService = {
  createChampionship,
  getChampionship,
  getUserChampionshipId,
  deleteChampionship
}

export default championshipService