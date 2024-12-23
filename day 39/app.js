const express = require("express");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
// const jobRouter = require("./routes/jobRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());

// app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

module.exports = app;
