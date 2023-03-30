import dotenv from "dotenv";
import { NextFunction , Request, Response} from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";

export function authValidation(req: Request, res: Response, next:NextFunction) {
  dotenv.config();
  const { authorization } = req.headers;

  try {
    if (!authorization) 
      return res.status(httpStatus.UNAUTHORIZED).send("Campo authorization obrigatório");
      

    const parts = authorization.split(" ");
    const [schema, token] = parts;
    if (parts.length !== 2) 
    return res.status(httpStatus.BAD_REQUEST).send("Formato campo authorization inválido");
       
    if (schema !== "Bearer")
      return res.status(httpStatus.BAD_REQUEST).send("Bearer inválido");
      
    const user = jwt.verify(token, process.env.SECRET_JWT = "secret_jwt");
    res.locals.user = user;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(httpStatus.UNAUTHORIZED);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
  next();
}
