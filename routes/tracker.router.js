import express from "express";
import {
  trackerHandler,
  userCreateHandler,
  userGetAllHandler,
} from "../controllers/tracker.controller.js";

const router = express.Router();

router.route("").get(userGetAllHandler);
router.route("").post(userCreateHandler);
router.route("/:id/exercises").post(trackerHandler);

export default router;
