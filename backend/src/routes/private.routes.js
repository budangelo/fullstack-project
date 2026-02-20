import { Router } from "express";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router()
router.get("/private/test", requireAuth, (req, res) => {
  res.json({ status: "ok", user: req.user })
})

export default router;
