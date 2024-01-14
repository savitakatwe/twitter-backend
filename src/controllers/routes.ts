import { Express } from "express";
import AuthController from "./authController";
import authMiddleware from "../middlewares/Auth.middleware";
import PostController from "./postController";
import FollowController from "./followController";
import promiseWrapper from "../helpers/promiseWrapper";

function routes(app: Express) {
  const authController = new AuthController();
  const postController = new PostController();
  const followController = new FollowController();

  app.post("/signUp", promiseWrapper(authController.signUp));
  app.get("/login", promiseWrapper(authController.login));
  app.use(authMiddleware);

  // Routes after authentication.
  app.post("/post", promiseWrapper(postController.createPost));
  app.get("/getMyFeed", promiseWrapper(postController.getMyFeed));
  app.post("/followUser", promiseWrapper(followController.followUser));
}
export default routes;
