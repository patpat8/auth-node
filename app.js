import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

// Using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:3001', 'http://localhost:3000'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using router
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Using error middleware
app.use(errorMiddleware);
