import { Request } from "express";
import PostService from "../services/postService";
class PostController {
  private postService = PostService;
  constructor() {
    // this.postService = new PostService();
  }

  createPost = async (req: Request) => {
    const body = req.body;
    if (!req.body.message) {
      return Promise.reject({ msg: "All fields are required" });
    }
    //return await this.postService.createPost(body.message);
  };
}
export default PostController;
