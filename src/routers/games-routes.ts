import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware";
import { createGames, findGames } from "../controllers/games-controller";

const gamesRouter = Router()

gamesRouter
  .all("/*", authValidation)
  .post("/championship/:championshipId", createGames)
  .get("/:championshipsId", findGames)

export {gamesRouter}