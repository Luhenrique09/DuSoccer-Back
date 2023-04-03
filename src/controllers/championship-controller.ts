import httpStatus from "http-status";
import {Request, Response} from "express";
import championshipService from "../service/championship-service";
import { AuthenticatedRequest } from "../middlewares/authValidation.middleware";

export async function createChampionship (req: AuthenticatedRequest, res: Response){
  const {name, numTeam, returnPlay} = req.body;
  const {userId} = req;

  try {
    const result = await championshipService.createChampionship(name, numTeam, returnPlay, userId)
   
    return res.status(httpStatus.CREATED).send(result);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND);
  }
};

export async function getUserChampionshipId(req: AuthenticatedRequest, res: Response) {
  const {userId} = req;

  try{
    const result = await championshipService.getUserChampionshipId(userId);
    return res.status(httpStatus.OK).send(result);
  } catch(error) {
    return res.status(httpStatus.NOT_FOUND);
    
  }
}

export async function getChampionship(req: AuthenticatedRequest, res: Response) {

  try{
    const result = await championshipService.getChampionship();
    return res.status(httpStatus.OK).send(result);
  } catch(error) {
    return res.status(httpStatus.NOT_FOUND);
  }
}