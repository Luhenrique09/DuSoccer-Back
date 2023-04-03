import teamsRepository from "../../repositories/teams-repository";
import { exceedError, notFoundError } from "./error";

async function createTeam(name: string, championshipsId: number) {
  const data  = {
    name,
    championshipsId
  }
   const championship = await teamsRepository.findChampionshipById(championshipsId);
  if(!championship) throw notFoundError();


  const teams = await teamsRepository.findAllTemasByIdChampionship(championshipsId);
  const { numTeam } = championship;
  if (teams.length === numTeam) throw exceedError(numTeam);

  const resultTeam = await teamsRepository.createTeam(data);

  return resultTeam;
}

async function getTeamsByUser(championshipsId: number) {
  const championship = await teamsRepository.findChampionshipById(championshipsId);
  const teams = teamsRepository.findTeamsChampionshipById(championshipsId);
  if(!teams || !championship) throw notFoundError();
  
  return teams;
}

const teamsService = {
  createTeam,
  getTeamsByUser
}



export default teamsService;