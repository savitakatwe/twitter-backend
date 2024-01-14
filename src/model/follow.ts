import mongoose from "mongoose";

interface IFollow extends Document {
  userId: mongoose.Types.ObjectId;
  followUserId: mongoose.Types.ObjectId;
}
const followSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    followUserId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true },
);
const Follow = mongoose.model<IFollow>("follow", followSchema);
export default Follow;
