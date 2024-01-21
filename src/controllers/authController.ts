import { Request } from "express";

import UserService from "../services/userService";
import AuthService from "../services/authService";

class AuthController {
  private userService: UserService;
  private authService: AuthService;
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
  }
  signUp = async (req: Request) => {
    const body = req.body;

    return await this.userService.createUser(
      body.name,
      body.textId,
      body.password,
    );
  };
  login = async (req: Request) => {
    const { textId, password } = req.body;
    return await this.authService.login(textId, password);
  };

  getUsers = async (req: Request) => {
    return await this.userService.getUser(req.userId);
  };
}

export default AuthController;
