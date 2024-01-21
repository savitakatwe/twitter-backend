import User, { IUser } from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FollowUser } from "../types/FollowUser";
import FollowService from "./followService";

class UserService {
  private followService: FollowService;
  constructor() {
    this.followService = new FollowService();
  }
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
  async getUser(userId: string): Promise<FollowUser[]> {
    const userArray: IUser[] = await User.find({ userid: { $ne: userId } });
    const getFollowing = await this.followService.getFollowings(userId);
    console.log(getFollowing);
    return userArray.map((value) => {
      return {
        textId: value.textId,
        name: value.name,
        // @ts-ignore
        id: value._id,
        isFollowing: !!getFollowing.find((followItem) => {
          // @ts-ignore
          return followItem.followUserId.toString() === value._id.toString();
        }),
      };
    });
  }
}
export default UserService;
