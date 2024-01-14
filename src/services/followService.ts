import mongoose from "mongoose";
import Follow from "../model/follow";

class FollowService {
  async followUser(
    userId: string | undefined,
    followUserId: mongoose.Types.ObjectId,
  ) {
    if (userId === followUserId.toString()) {
      await Promise.reject({ msg: "You cannot follow yourself" });
    }
    const isFollowing = await Follow.findOne({
      followUserId: followUserId,
    }).where({ userId: userId });
    if (isFollowing) {
      await Promise.reject({ msg: "You are already following" });
    }
    return await Follow.create({
      userId: userId,
      followUserId: followUserId,
    });
  }

  async getFollowings(userId: string | undefined) {
    return Follow.find().where({ userId: userId });
  }
}
export default FollowService;
