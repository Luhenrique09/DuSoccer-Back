import { Router } from "express";
import { createChampionship, getChampionship, getUserChampionshipId } from "../controllers/championship-controller";
import { authValidation } from "../middlewares/authValidation.middleware";

const championshipRouter = Router();

championshipRouter
  .all("/*", authValidation)
  .get("", getChampionship)
  .post("", createChampionship)
  .get("/userchampionship", getUserChampionshipId)
  
  

export { championshipRouter };