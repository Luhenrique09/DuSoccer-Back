import { Response, Request } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/authValidation.middleware";
import teamsService from "../service/teams-service";

export async function postTeams(req: Request, res: Response) {
  const { name, championshipsId } = req.body;

  try {
   await teamsService.createTeam(name, championshipsId);

    return res.sendStatus(httpStatus.CREATED)
  } catch (error: any) {
    if (error.name === "ExceedError") return res.status(httpStatus.BAD_REQUEST).send(error.message);

    if (error.name === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

export async function getTeamsByUser(req: AuthenticatedRequest, res: Response) {
  const championshipsId = req.params.id;

  try {
    const result = await teamsService.getTeamsByUser(Number(championshipsId));
    console.log(result)
    return res.status(httpStatus.OK).send(result);
  } catch (error: any) {
    if (error.name === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR);
  }
} 
