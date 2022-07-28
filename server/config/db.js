import mongoose from "mongoose";
import { NODE_ENV, URI } from "./config.js";

// mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true });

// const connectDB = mongoose.connection;
// connection.once("open", () => {
//   console.log(
//     `MongoDB Connected: ${connection.connection.host}`.blue.underline
//   );
// });

const connectDB = async () => {
  try {
    if (NODE_ENV === "production") {
      const connection = await mongoose.connect(URI);
      console.log(`MongoDB connected: ${connection.connection.host}`);
    } else {
      //change back to local host here
      const connection = await mongoose.connect("mongodb://127.0.0.1/pack-way");
      console.log(
        `MongoDB Connected: ${connection.connection.host}`.blue.underline
      );
    }
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

export default connectDB;
