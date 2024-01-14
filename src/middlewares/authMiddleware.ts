import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as {
    id: string;
  };
  req.userId = decoded.id;
  next();
}
export default authMiddleware;
