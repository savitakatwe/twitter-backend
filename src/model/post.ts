import mongoose from "mongoose";

interface IPost extends Document {
  userId: mongoose.Types.ObjectId;
  message: string;
}
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    message: {
      type: String,
    },
  },
  { timestamps: true },
);
const Post = mongoose.model<IPost>("post", postSchema);
export default Post;
