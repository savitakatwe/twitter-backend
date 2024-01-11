import { Request } from "express";

import UserService from "../services/userService";

class AuthController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  signUp = async (req: Request) => {
    const body = req.body;
    if (!req.body.textId || !req.body.password) {
      return Promise.reject({ msg: "All fields are required" });
    }
    return await this.userService.createUser(body.textId, body.password);
  };
}

export default AuthController;
