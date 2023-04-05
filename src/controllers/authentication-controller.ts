import { Request, Response } from "express";
import httpStatus from "http-status";
import authenticationService from "../service/authentication-controller.ts";
import { AuthenticatedRequest } from "../middlewares/authValidation.middleware.js";
export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const result = await authenticationService.signIn({ email, password });
    const user = {
      id: result.user.id,
        name:result.user.name ,
          email: result.user.email,
          token: result.token
    }
  
    return res.status(httpStatus.OK).send(user);
} catch (error) {
  return res.status(httpStatus.UNAUTHORIZED);
}
}

export async function deleteSession(req: Request, res: Response) {
  const authHeader = req.header("Authorization");
  
  const token = authHeader?.split(" ")[1];
  if(!token) return res.status(httpStatus.UNAUTHORIZED);
  try{
    await authenticationService.deleteSession(token);

    return res.status(httpStatus.OK).send("deletado")
  }
  catch (error: any) {
    if (error.name === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
