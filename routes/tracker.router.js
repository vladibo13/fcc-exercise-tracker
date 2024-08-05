import express from "express";
import { trackerHandler } from "../controllers/tracker.contoller.js";

const router = express.Router();

router.route("").get(trackerHandler);

export default router;
