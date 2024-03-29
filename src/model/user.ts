import mongoose from "mongoose";

export interface IUser extends Document {
  textId: string;
  name: string;
  password: string;
}
const userSchema = new mongoose.Schema(
  {
    textId: {
      type: String,
      required: true,
    },
    name: {
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

const User = mongoose.model<IUser>("user", userSchema);

export default User;
