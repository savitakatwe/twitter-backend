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

    if (!req.body.textId || !req.body.password) {
      return Promise.reject({ msg: "All fields are required" });
    }
    return await this.userService.createUser(body.textId, body.password);
  };
  login = async (req: Request) => {
    const { textId, password } = req.body;
    return await this.authService.login(textId, password);
  };
}

export default AuthController;
