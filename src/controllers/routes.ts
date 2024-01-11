import { Express, Request, Response } from "express";
import AuthController from "./authController";

const promiseWrapper =
  <TRES>(callback: (req: Request) => Promise<TRES>) =>
  (req: Request, res: Response) => {
    callback(req)
      .then((result: TRES) => {
        res.send(result).status(200);
      })
      .catch((err) => res.send(err).status(500));
  };

function routes(app: Express) {
  const authController = new AuthController();
  app.post("/", promiseWrapper(authController.signUp));
}
export default routes;
