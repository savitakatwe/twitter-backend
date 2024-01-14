import { Request } from "express";
import PostService from "../services/postService";
import FollowService from "../services/followService";
class PostController {
  private postService: PostService;
  private followService: FollowService;

  constructor() {
    this.postService = new PostService();
    this.followService = new FollowService();
  }

  createPost = async (req: Request) => {
    const body = req.body;
    const userId = req.userId;
    if (!req.body.message) {
      return Promise.reject({ msg: "All fields are required" });
    }
    return await this.postService.createPost(userId, body.message);
  };

  getMyFeed = async (req: Request) => {
    const userId = req.userId;
    const followingUsers = await this.followService.getFollowings(userId);
    const userIds = followingUsers.map((x) => x.followUserId.toString());
    return await this.postService.getMyFeed([userId, ...userIds]);
  };
}
export default PostController;
