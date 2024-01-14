import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL as string)
    .then(() => console.log("Mongo db connected"))
    .catch((err) => console.log("Mongo error", err));
};
