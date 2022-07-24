import mongoose from "mongoose";

import { NODE_ENV, CONNECTION_STRING } from "./config.js";

const connectDB = async () => {
  try {
    if (NODE_ENV === "production") {
      const connection = await mongoose.connect(CONNECTION_STRING);
      console.log(`MongoDB connected: ${connection.connection.host}`);
    } else {
      //change back to local host here
      const connection = await mongoose.connect(process.env.MONGO_URI);
      console.log(
        `MongoDB Connected: ${connection.connection.host}`.blue.underline
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
