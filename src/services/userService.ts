import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Jwt_Secret_Key } from "../constant/constant";

class UserService {
  async createUser(textId: string, password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      textId: textId,
      password: hash,
    });
    const jwtToken = jwt.sign({ id: newUser._id }, Jwt_Secret_Key);
    return { jwtToken, newUser };
  }
}
export default UserService;
