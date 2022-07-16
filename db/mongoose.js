import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.nezyc.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(URL)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error));
