import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

export const PORT = process.env.PORT || 8000;
export const NODE_ENV = process.env.NODE_ENV;

// import routes
import tripRouter from "./routes/tripRoutes.js";
import itemRouter from "./routes/itemRoutes.js";

// connect to database
connectDB();

const app = express();

//use JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/trip", tripRouter);
app.use("/items", itemRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// port is listening
app.listen(PORT, () => {
  console.log(`Server is listening on port : ${PORT}`);
});
