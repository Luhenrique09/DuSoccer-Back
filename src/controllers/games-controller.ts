import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/authValidation.middleware";
import { Response } from "express";
import gamesService from "../service/games-service";

export async function createGames(req: AuthenticatedRequest, res: Response) {
  const { championshipId } = req.params;
  
  try {
     const games = await gamesService.createGames(parseInt(championshipId)); 

    return res.status(httpStatus.CREATED).send(games);
  } catch (error: any) {
    if (error.name === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

export async function findGames(req: AuthenticatedRequest, res: Response) {
  const {championshipsId} = req.params;

  try {
  
    const games = await gamesService.getGamesByChampionshipId(parseInt(championshipsId)); 

   return res.status(httpStatus.OK).send(games);
 } catch (error: any) {
   if (error.name === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);

   return res.status(httpStatus.INTERNAL_SERVER_ERROR);
 }
}
