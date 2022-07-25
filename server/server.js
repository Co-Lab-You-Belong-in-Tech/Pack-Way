import express from "express";
import passport from "passport";
import colors from "colors";
import cors from "cors";

// config import
import { PORT } from "./config/config.js";
import connectDB from "./config/db.js";

// route imports
import tripRouter from "./routes/tripRoutes.js";
import userRouter from "./routes/userRoutes.js";

// init app
const app = express();

// connect database
connectDB();

// cors - only allow front end
app.use(cors({ origin: "http://localhost:3000" }));

// init passport
app.use(passport.initialize());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/trip", tripRouter);
app.use("/user", userRouter);

// port listening
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
