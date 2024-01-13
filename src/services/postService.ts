import mongoose from "mongoose";
import Post from "../Model/post";

class PostService {
  async createPost(userId: string | undefined, message: string) {
    return await Post.create({ userId: userId, message: message });
  }
  async getMyFeed(userId: string | undefined) {
    return await Post.find({ userId: userId });
  }
}
export default PostService;
