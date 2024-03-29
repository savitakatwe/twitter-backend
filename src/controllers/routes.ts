import { Express } from "express";
import AuthController from "./authController";
import PostController from "./postController";
import FollowController from "./followController";
import promiseWrapper from "../helpers/promiseWrapper";
import { loginSchema, signUpSchema } from "../validations/authValidations";
import { createPostSchema } from "../validations/postValidations";
import { followSchema } from "../validations/followValidations";
import ValidationMiddleware from "../middlewares/validationMiddleware";
import authMiddleware from "../middlewares/authMiddleware";

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
  app.get("/getUsers", promiseWrapper(authController.getUsers));
  app.post(
    "/followUser",
    ValidationMiddleware(followSchema),
    promiseWrapper(followController.followUser),
  );
}
export default routes;
