import { Router } from "express";
import { getTeamsByUser, postTeams } from "../controllers/teams-controller";
import { authValidation } from "../middlewares/authValidation.middleware";

const teamsRouter = Router();

teamsRouter
  .all("/*", authValidation)
  .post("/", postTeams)
  .get("/:id", getTeamsByUser)
export {teamsRouter}