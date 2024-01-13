import { Express, Request, Response } from "express";
import AuthController from "./authController";
import authMiddleware from "../middlewares/Auth.middleware";
import PostController from "./postController";
import FollowController from "./followController";

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
  const postController = new PostController();
  const followController = new FollowController();
  app.post("/signUp", promiseWrapper(authController.signUp));
  // a middleware function with no mount path. This code is executed for every request to the router

  app.get("/login", promiseWrapper(authController.login));
  app.use(authMiddleware);

  app.post("/post", promiseWrapper(postController.createPost));
  app.get("/getMyFeed", promiseWrapper(postController.getMyFeed));
  app.post("/followUser", promiseWrapper(followController.followUser));
}
export default routes;
