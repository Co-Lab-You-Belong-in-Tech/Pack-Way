const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5001;

// connect database
connectDB();

// init app
const app = express();

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/trip", require("./routes/tripRoutes"));

// error handler
app.use(errorHandler);

// port listening
app.listen(port, () => console.log(`Server started on port ${port}`));
