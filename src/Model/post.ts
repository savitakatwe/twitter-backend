import mongoose from "mongoose";

interface post extends Document {
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
const Post = mongoose.model<post>("post", postSchema);
export default Post;
