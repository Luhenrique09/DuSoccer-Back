import { NextFunction , Request, Response} from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import prisma from "../database/db";

export async function authValidation(req: AuthenticatedRequest, res: Response, next:NextFunction) {
  const authHeader = req.header("Authorization");
  if (!authHeader) 
  return res.status(httpStatus.UNAUTHORIZED).send("Campo authorization obrigatório");
  
  const token = authHeader.split(" ")[1];
  if(!token) return res.status(httpStatus.UNAUTHORIZED);

  try {
    const {userId} = jwt.verify(token, `${process.env.JWT_SECRET}`) as any;
 
    const session = await prisma.session.findFirst({where:{token}})
    if(!session) return res.status(httpStatus.UNAUTHORIZED);

    req.userId = userId;
    return next();
  } catch (error) {
      return res.status(httpStatus.UNAUTHORIZED);
  }
 
}
export type AuthenticatedRequest = Request & any;

