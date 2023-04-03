import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import { usersRouter } from './routers/users-router';
import dayjs from 'dayjs';
import { authenticationRouter } from './routers/authentication-router';
import { championshipRouter } from './routers/championship-router';
import { teamsRouter } from './routers/teams-router';
import {gamesRouter} from './routers/games-routes'

dotenv.config();

const app = express();
app
.use(cors())
.use(express.json())
.get("/health", (_req, res) => res.send("OK!"))
.use("/users", usersRouter)
.use("/auth", authenticationRouter)
.use("/championship", championshipRouter)
.use("/teams", teamsRouter)
.use("/games", gamesRouter)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `${dayjs().format("YYYY-MM-DD HH:mm:ss")} [Listening ON] Port: ${PORT}`
  );
});