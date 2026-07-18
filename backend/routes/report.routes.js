import express from "express";

import upload from "../middleware/upload.middleware.js";

import {
uploadReport,
getAllReports,
removeReport
} from "../controllers/reportController.js";

import {protect} from "../middleware/authMiddleware.js";

const router=express.Router();

router.post(
"/upload",
protect,
upload.single("report"),
uploadReport
);

router.get(
"/",
protect,
getAllReports
);

router.delete(
"/:id",
protect,
removeReport
);

export default router;