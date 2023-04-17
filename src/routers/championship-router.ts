import { Router } from "express";
import { createChampionship, deleteChampionship, getChampionship, getUserChampionshipId } from "../controllers/championship-controller";
import { authValidation } from "../middlewares/authValidation.middleware";

const championshipRouter = Router();

championshipRouter
  .all("/*", authValidation)
  .get("/", getChampionship)
  .post("/user", createChampionship)
  .get("/user", getUserChampionshipId)
  .delete("/:championshipId", deleteChampionship)
  
  

export { championshipRouter };