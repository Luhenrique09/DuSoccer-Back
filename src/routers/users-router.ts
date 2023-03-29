import { Router } from "express";
import { usersPost } from "../controllers/users-controller";

const usersRouter = Router();

usersRouter.post("/sign-up", usersPost);


export { usersRouter };
