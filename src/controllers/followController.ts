import { Request } from "express";
import FollowService from "../services/followService";

class FollowController {
  private followService: FollowService;
  constructor() {
    this.followService = new FollowService();
  }
  followUser = async (req: Request) => {
    if (!req.body.followUserId) {
      return Promise.reject({ msg: "All fields are required" });
    }
    const userId = req.userId;
    return await this.followService.followUser(userId, req.body.followUserId);
  };
}
export default FollowController;
