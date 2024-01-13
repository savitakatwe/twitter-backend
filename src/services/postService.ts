import mongoose from "mongoose";
import Post from "../Model/post";

class PostService {
  async createPost(userId: string, message: string) {
    return await Post.create({ userId: userId, message: message });
  }
  async getMyFeed(userIds: string[]) {
    return Post.find({ userId: { $in: userIds } }).sort({
      createdAt: -1,
    });
  }
}
export default PostService;
