import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Jwt_Secret_Key } from "../constant/constant";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  const decoded = jwt.verify(token, Jwt_Secret_Key) as { id: string };
  req.userId = decoded.id;
  next();
}
export default authMiddleware;
