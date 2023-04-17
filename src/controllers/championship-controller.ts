import httpStatus from "http-status";
import {Request, Response} from "express";
import championshipService from "../service/championship-service";
import { AuthenticatedRequest } from "../middlewares/authValidation.middleware";

export async function createChampionship (req: AuthenticatedRequest, res: Response){
  const {name, image, numTeam, returnPlay} = req.body as CreateChampionshipRequestBody;
  const {userId} = req;

  try {
   await championshipService.createChampionship(name, Number(numTeam), Boolean(returnPlay), userId, image)
    
    return res.sendStatus(httpStatus.CREATED)
  } catch (error: any) {
    if (error.name === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);
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

export async function deleteChampionship (req: AuthenticatedRequest, res: Response){
  const { championshipId } = req.params;
  const { userId } = req;

  try {
    await championshipService.deleteChampionship(Number(championshipId), userId);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error deleting championship' });
  }
}

type CreateChampionshipRequestBody = {
  name: string;
  numTeam: number;
  returnPlay: boolean;
  image: string;
};
