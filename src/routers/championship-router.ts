import { Router } from "express";
import { createChampionship } from "../controllers/championship-controller";
import { authValidation } from "../middlewares/authValidation.middleware";

const championshipRouter = Router();

championshipRouter
  .all("/*", authValidation)
  .post("/", createChampionship)
  

export { championshipRouter };