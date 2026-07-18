import express from "express";

import {
  getProfile,
  updateProfile,
  completeOnboarding,
  deleteProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get(
  "/profile",
  protect,
  getProfile
);

router.put(
  "/profile",
  protect,
  updateProfile
);

router.put(
  "/onboarding",
  protect,
  completeOnboarding
);

router.delete(
  "/profile",
  protect,
  deleteProfile
);

export default router;