import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/twitterDb")
    .then(() => console.log("Mongo db connected"))
    .catch((err) => console.log("Mongo error", err));
};
