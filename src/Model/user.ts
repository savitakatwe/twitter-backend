import mongoose from "mongoose";

interface user extends Document {
  textId: string;
  password: string;
}
const userSchema = new mongoose.Schema(
  {
    textId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model<user>("user", userSchema);

export default User;
