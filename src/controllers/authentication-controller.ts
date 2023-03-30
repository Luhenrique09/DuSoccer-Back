import { Request, Response } from "express";
import httpStatus from "http-status";
import authenticationService from "../service/authentication-controller.ts";
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
