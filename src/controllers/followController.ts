import { Request } from "express";
import FollowService from "../services/followService";

class FollowController {
  private followService: FollowService;
  constructor() {
    this.followService = new FollowService();
  }
  followUser = async (req: Request) => {
    const userId = req.userId;
    return await this.followService.followUser(userId, req.body.followUserId);
  };
}
export default FollowController;
