import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

export default router;
