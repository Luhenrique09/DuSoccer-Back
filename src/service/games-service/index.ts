import gamesRepository from "../../repositories/games-repository";
import { notFoundError } from "../teams-service/error";

async function createGames(championshipsId:number) {
  const championship = await gamesRepository.findUserChampionshipId(championshipsId);
    if (!championship) {
      throw notFoundError("championship"); 
    }
    const teams = await gamesRepository.findTeamsByChampionshipId(championshipsId);
    const { numTeam, returnPlay } = championship;
    if(!teams){
      throw notFoundError("teams"); 
    }
    if(teams.length !== numTeam){
      throw notFoundError("teams"); 
    }

    if (numTeam <= 1) {
      throw notFoundError("Qtde"); 
    }
    
    const totalRounds = returnPlay ? numTeam * 2 - 2 : numTeam - 1;
    const games: Game[] = [];
    let rounds: number;
   
    for (let k = 1; k <= totalRounds; k++) {
      rounds = k;
      for (let i = 0; i < numTeam; i++) {
        for (let j = i + 1; j < numTeam; j++) {
          const mander = teams[i].id;
          const visitor = teams[j].id;

          games.push({
            championshipsId: championshipsId,
            round: rounds,
            manderId: mander,
            visitorId: visitor
          });

          if (returnPlay) {
            games.push({
              championshipsId: championshipsId,
              round: rounds + (totalRounds-2),
              manderId: visitor,
              visitorId: mander
            });
          }
        }
      }
    }

    const calGames = ((totalRounds*2)*8)/2;
    const newArrayGames = returnPlay ? games.slice(0, (calGames-2)) : games.slice(0, calGames);
   
    const createdGames = await gamesRepository.createGames(newArrayGames);

    return createdGames;
  
}

async function getGamesByChampionshipId(championshipsId: number) {
  const games = await gamesRepository.getGamesByChampionshipId(championshipsId);
  return games;
}

interface Game {
  championshipsId: number;
  round: number;
  manderId: number;
  visitorId: number ;
}

const gamesService = {
  createGames,
  getGamesByChampionshipId
}

export default gamesService;