import express from "express";
const router = express.Router();
import authJWT from "../config/passport.js";

import {
  getUser,
  register,
  login,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUser);
router.put("/:id", authJWT, updateUser);
router.delete("/:id", authJWT, deleteUser);

export default router;
