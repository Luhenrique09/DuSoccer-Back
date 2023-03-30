import httpStatus from "http-status";
import {Request, Response} from "express";
import championshipService from "../service/championship-service";

export async function createChampionship (req: Request, res: Response){
  const {name, numTeam, returnPlay} = req.body;
  const userId = res.locals.user.id;

  try {
    const result = await championshipService.createChampionship(name, numTeam, returnPlay, userId)
    console.log(result)
    return res.status(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND);
  }
}