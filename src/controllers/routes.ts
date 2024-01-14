import { Express } from "express";
import AuthController from "./authController";
import PostController from "./postController";
import FollowController from "./followController";
import promiseWrapper from "../helpers/promiseWrapper";
import { loginSchema, signUpSchema } from "../validations/auth.validations";
import { createPostSchema } from "../validations/post.validations";
import { followSchema } from "../validations/follow.validations";
import ValidationMiddleware from "../middlewares/Validation.middleware";
import authMiddleware from "../middlewares/Auth.middleware";

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
