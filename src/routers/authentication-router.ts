import { Router } from "express";
import { singInPost } from "../controllers/authentication-controller";

const authenticationRouter = Router();

authenticationRouter.post("/sign-in", singInPost);

export { authenticationRouter };
