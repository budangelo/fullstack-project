import { Router } from "express";
import Feedback from "../models/feedback.model.js";

const router = Router();

router.post("/feedback", async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: "name and message are required" });
    }
    const feedback = await Feedback.create({
      name,
      email,
      message,
      rating
    });
    return res.status(201).json({ id: feedback._id });
  } catch (err) {
    return res.status(500).json({ error: "internal server error" });
  }
});

export default router;
