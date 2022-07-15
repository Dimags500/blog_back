import mongoose from "mongoose";

const connectURL = process.env.MONGO_CONNECT;
mongoose
  .connect(connectURL)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error));
