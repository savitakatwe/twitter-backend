import { Express } from "express";
import AuthController from "./authController";
import authMiddleware from "../middlewares/auth.middleware";
import PostController from "./postController";
import FollowController from "./followController";
import promiseWrapper from "../helpers/promiseWrapper";
import ValidationMiddleware from "../middlewares/validation.middleware";
import { loginSchema, signUpSchema } from "../validations/auth.validations";
import { createPostSchema } from "../validations/post.validations";
import { followSchema } from "../validations/follow.validations";

function routes(app: Express) {
  const authController = new AuthController();
  const postController = new PostController();
  const followController = new FollowController();

  app.post(
    "/signUp",
    ValidationMiddleware(signUpSchema),
    promiseWrapper(authController.signUp),
  );
  app.post(
    "/login",
    ValidationMiddleware(loginSchema),
    promiseWrapper(authController.login),
  );
  app.use(authMiddleware);

  // Routes after authentication.
  app.post(
    "/post",
    ValidationMiddleware(createPostSchema),
    promiseWrapper(postController.createPost),
  );
  app.get("/getMyFeed", promiseWrapper(postController.getMyFeed));
  app.post(
    "/followUser",
    ValidationMiddleware(followSchema),
    promiseWrapper(followController.followUser),
  );
}
export default routes;
