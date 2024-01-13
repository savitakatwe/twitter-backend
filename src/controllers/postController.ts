import { Request } from "express";
import PostService from "../services/postService";
class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
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
    return await this.postService.getMyFeed(userId);
  };
}
export default PostController;
