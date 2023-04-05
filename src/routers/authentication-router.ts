import { Router } from "express";
import { deleteSession, singInPost } from "../controllers/authentication-controller";
import { authValidation } from "../middlewares/authValidation.middleware";

const authenticationRouter = Router();

authenticationRouter
.post("/sign-in", singInPost)
.delete("/logout", deleteSession)

export { authenticationRouter };
