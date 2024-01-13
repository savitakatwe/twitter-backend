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
    const following = await this.followService.getFollowing(userId);
    console.log(following);
    const userIds = following.map((x) => {
      return x.followUserId.toString();
    });
    userIds.push(userId);
    return await this.postService.getMyFeed(userIds);
  };
}
export default PostController;
