import { Router } from "express"
import Pill from "../models/pill.model.js"
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router()
router.get("/pills/public", async (req, res) => {
  const pills = await Pill.find({ isPublic: true })
    .sort({ createdAt: -1 })
    .limit(10)
    .select("title summary category isPublic createdAt")
  res.json({ pills })
});
router.get("/private/pills", requireAuth, async (req, res) => {
  const pills = await Pill.find({})
    .sort({ createdAt: -1 })
    .select("title summary category isPublic createdAt")
  res.json({ pills })
});

export default router;
