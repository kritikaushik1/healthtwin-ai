import express from "express";
import {
  signup,
  login,
 getCurrentUser,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Signup
router.post("/signup", signup);
    
// Login
router.post("/login", login);
router.get("/me", protect, getCurrentUser);

export default router;