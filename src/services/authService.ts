import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
  async login(textId: string, password: string) {
    const user = await User.findOne({ textId: textId });
    if (!user) {
      return Promise.reject({ msg: "User doesn't exists" });
    }
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return Promise.reject({ msg: "Incorrect password" });
    }
    const jwtToken = jwt.sign(
      { id: user._id },
      process.env.Jwt_Secret_Key as string,
    );
    const userObject = user.toJSON();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPassword, ...otherData } = userObject;
    return { jwtToken, user: otherData };
  }
}

export default AuthService;
