import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
  async createUser(name: string, textId: string, password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name: name,
      textId: textId,
      password: hash,
    });
    const jwtToken = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET_KEY as string,
    );
    return { jwtToken, newUser };
  }
}
export default UserService;
